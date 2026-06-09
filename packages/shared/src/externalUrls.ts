const DOMAIN = 'clawhost.cloud'
const LINKS = `https://l.${DOMAIN}`

const EXTERNAL_URLS = {
    CLAWHOST: {
        DOMAIN,
        BASE: `https://${DOMAIN}`,
        WWW: `https://www.${DOMAIN}`,
        API: `https://api.${DOMAIN}`,
        CDN: `https://cdn.${DOMAIN}`,
        CDN_GENERALS: `https://cdn.${DOMAIN}/assets/generals`,
        CDN_EMAILS: `https://cdn.${DOMAIN}/assets/emails`,
        LINKS,
        subdomain: (name: string) => `https://${name}.${DOMAIN}`
    },
    LOCAL: {
        WEB: 'http://localhost:1111',
        WEB_HTTPS: 'https://localhost:1111',
        API: 'http://localhost:2222',
        API_HTTPS: 'https://localhost:2222',
        DESKTOP: 'http://localhost:3333',
        DESKTOP_HTTPS: 'https://localhost:3333'
    },
    GITHUB: {
        API: 'https://api.github.com',
        USER: 'https://api.github.com/user',
        USER_EMAILS: 'https://api.github.com/user/emails',
        repo: (owner: string, repo: string) => ({
            CONTENTS: (path: string, ref?: string) =>
                `https://api.github.com/repos/${owner}/${repo}/contents/${path}${ref ? `?ref=${ref}` : ''}`,
            REF: (branch: string) =>
                `https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${branch}`,
            REFS: `https://api.github.com/repos/${owner}/${repo}/git/refs`,
            PULLS: `https://api.github.com/repos/${owner}/${repo}/pulls`,
            PULL_MERGE: (prNumber: string) =>
                `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/merge`,
            DELETE_REF: (branch: string) =>
                `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`
        })
    },
    GOOGLE: {
        USERINFO: 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
    HETZNER: {
        API: 'https://api.hetzner.cloud/v1'
    },
    NPM: {
        REGISTRY: (pkg: string) => `https://registry.npmjs.org/${pkg}`,
        DOWNLOADS: (pkg: string) =>
            `https://api.npmjs.org/versions/${pkg}/last-week`
    },
    AGENT_DOCS: {
        OPENCLAW: 'https://openclaw.com/docs',
        HERMES: 'https://hermes-agent.nousresearch.com/docs/'
    },
    SOCIAL: {
        PRODUCT_HUNT: `${LINKS}/producthunt`,
        X: `${LINKS}/x`,
        FACEBOOK: `${LINKS}/facebook`,
        INSTAGRAM: `${LINKS}/instagram`,
        THREADS: `${LINKS}/threads`,
        YOUTUBE: `${LINKS}/youtube`,
        TIKTOK: `${LINKS}/tiktok`,
        GITHUB: `${LINKS}/github`,
        TUTORIAL: `${LINKS}/tutorial`,
        TUTORIAL_GO: `${LINKS}/tutorial-go`,
        SUPPORT_EMAIL: `support@${DOMAIN}`
    }
}

export default EXTERNAL_URLS