import type { Context } from 'hono'

import { ok, fail } from '@/lib/response'
import {
    githubApi,
    openaiHelpers,
    slugify,
    todayDate
} from '@/controllers/cron/generateBlogPost'

const generateBlogPost = async (c: Context) => {
    const openaiKey = process.env.OPENAI_API_KEY
    const githubToken = process.env.GITHUB_TOKEN

    if (!openaiKey || !githubToken)
        return fail(c, 'Missing OPENAI_API_KEY or GITHUB_TOKEN', 500)

    const openai = openaiHelpers.createClient()
    const existingSlugs = await githubApi.fetchExistingSlugs(githubToken)
    const topic = await openaiHelpers.discoverTrendingTopic(
        openai,
        existingSlugs
    )
    const slug = slugify(topic.title)

    if (existingSlugs.includes(slug)) {
        return fail(c, `Slug already exists: ${slug}`, 409)
    }

    const body = await openaiHelpers.generateBlogContent(
        openai,
        topic.title,
        topic.angle
    )

    const frontmatter = [
        '---',
        `title: "${topic.title.replace(/"/g, '\\"')}"`,
        `slug: ${slug}`,
        'description:',
        `    "${topic.angle.replace(/"/g, '\\"')}"`,
        'author: ClawHost',
        `publishedAt: '${todayDate()}'`,
        'tags:',
        '    - openclaw',
        '    - ai-agents',
        '    - trending',
        `coverImage: /blogs/${slug}.webp`,
        '---',
        ''
    ].join('\n')

    const fullContent = frontmatter + body

    const baseSha = await githubApi.getProductionSha(githubToken)

    if (!baseSha) return fail(c, 'Failed to get Production branch SHA', 500)

    const branchName = `blog/${slug}`
    const branchCreated = await githubApi.createBranch(
        githubToken,
        branchName,
        baseSha
    )

    if (!branchCreated) return fail(c, 'Failed to create branch', 500)

    const pushed = await githubApi.pushFile(
        githubToken,
        slug,
        fullContent,
        branchName
    )

    if (!pushed) return fail(c, 'Failed to push blog post to branch', 500)

    const prUrl = await githubApi.createPullRequest(
        githubToken,
        branchName,
        topic.title,
        slug
    )

    if (!prUrl) return fail(c, 'Failed to create pull request', 500)

    const merged = await githubApi.mergePullRequest(githubToken, prUrl)

    if (!merged) {
        return ok(
            c,
            { slug, title: topic.title, pr: prUrl, merged: false },
            'Blog post PR created but not merged.'
        )
    }

    await githubApi.deleteBranch(githubToken, branchName)

    return ok(
        c,
        { slug, title: topic.title, pr: prUrl, merged: true },
        'Blog post generated, merged, and branch cleaned up.'
    )
}

export default generateBlogPost