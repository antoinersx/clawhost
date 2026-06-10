import type { FC, ReactNode } from 'react'
import type { AgentFileExplorerContentProps } from '@/ts/Interfaces'

import { useState } from 'react'
import { t } from '@openclaw/i18n'
import { Skeleton } from '@/components/ui'
import { MagnifyingGlassIcon, FileIcon } from '@phosphor-icons/react'
import { usePreferencesStore } from '@/lib/store'
import { THEMES } from '@/lib'
import { useAgentFiles } from '@/hooks'
import { demoFiles } from '@/data'
import {
    FileTreeSkeleton,
    FileTree,
    FileEditor,
    useFileEditor
} from '@/components/dashboard/AgentConfigDialog'

const AgentConfigContent: FC<AgentFileExplorerContentProps> = ({
    agentId,
    readOnly
}): ReactNode => {
    const storeTheme = usePreferencesStore((s) => s.theme)
    const resolvedTheme =
        storeTheme === THEMES.SYSTEM
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
                ? THEMES.DARK
                : THEMES.LIGHT
            : storeTheme
    const liveFiles = useAgentFiles(agentId, !readOnly)
    const files = readOnly
        ? { data: demoFiles, isPending: false, isError: false, error: null }
        : liveFiles
    const [searchQuery, setSearchQuery] = useState('')

    const editor = useFileEditor({
        agentId,
        files: files.data?.files,
        readOnly
    })

    const filteredFiles = files.data?.files.filter((file) =>
        searchQuery === ''
            ? true
            : file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              file.path.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const groupedFiles = filteredFiles?.reduce<
        Record<string, typeof filteredFiles>
    >((acc, file) => {
        const parts = file.path.split('/')
        const dir = parts.length > 1 ? parts.slice(0, -1).join('/') : ''
        if (!acc[dir]) acc[dir] = []
        acc[dir].push(file)
        return acc
    }, {})

    const folders = groupedFiles
        ? Object.entries(groupedFiles)
              .filter(([dir]) => dir !== '')
              .sort(([a], [b]) => a.localeCompare(b))
        : []
    const rootFiles = groupedFiles?.[''] ?? []

    return (
        <div className='flex h-full flex-col overflow-hidden'>
            <div className='flex min-h-0 flex-1 gap-3 overflow-hidden p-4'>
                <div className='border-border bg-muted flex w-56 shrink-0 flex-col overflow-hidden rounded-md border'>
                    {files.data && files.data.files.length > 0 && (
                        <div className='shrink-0 p-2'>
                            <div className='relative'>
                                <MagnifyingGlassIcon className='text-muted-foreground absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2' />
                                <input
                                    type='text'
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    placeholder={t(
                                        'dashboard.fileExplorerSearchFiles'
                                    )}
                                    className='border-border bg-background text-foreground placeholder:text-muted-foreground w-full rounded-md border py-1.5 pl-7 pr-2 text-xs outline-none transition-colors focus:border-[#ef5350]/50'
                                />
                            </div>
                        </div>
                    )}
                    <div className='flex flex-1 flex-col overflow-y-auto'>
                        {files.isPending && <FileTreeSkeleton />}
                        {files.isError && (
                            <div className='p-3 text-xs text-red-600 dark:text-red-400'>
                                {files.error?.message ||
                                    t('api.failedToListFiles')}
                            </div>
                        )}
                        {files.data && files.data.files.length === 0 && (
                            <div className='text-muted-foreground p-3 text-xs'>
                                {t('dashboard.fileExplorerNoFiles')}
                            </div>
                        )}
                        {groupedFiles &&
                            filteredFiles &&
                            filteredFiles.length > 0 && (
                                <FileTree
                                    folders={folders}
                                    rootFiles={rootFiles}
                                    selectedPath={editor.selectedPath}
                                    onSelectFile={editor.handleSelectFile}
                                />
                            )}
                        {searchQuery &&
                            filteredFiles &&
                            filteredFiles.length === 0 && (
                                <div className='text-muted-foreground flex flex-1 flex-col items-center justify-center gap-1.5 text-xs'>
                                    <FileIcon className='h-6 w-6' />
                                    {t('dashboard.fileExplorerNoSearchResults')}
                                </div>
                            )}
                    </div>
                </div>

                <div className='flex min-w-0 flex-1 flex-col'>
                    {!editor.selectedPath && (
                        <div className='border-border bg-muted text-muted-foreground flex flex-1 flex-col items-center justify-center gap-2 rounded-md border text-sm'>
                            <FileIcon className='text-muted-foreground h-8 w-8' />
                            {t('dashboard.fileExplorerSelectFile')}
                        </div>
                    )}
                    {editor.selectedPath && editor.fileContentIsPending && (
                        <div className='flex min-h-0 flex-1 flex-col'>
                            <div className='bg-muted/60 h-7 w-28 shrink-0 rounded-b-none rounded-t-md' />
                            <Skeleton className='min-h-0 flex-1 rounded-b-sm rounded-tl-none rounded-tr-sm' />
                        </div>
                    )}
                    {editor.selectedPath && editor.fileContentIsError && (
                        <div className='border-border bg-muted flex flex-1 items-center justify-center rounded-md border text-sm text-red-600 dark:text-red-400'>
                            {editor.fileContentError?.message ||
                                t('api.failedToReadFile')}
                        </div>
                    )}
                    {editor.selectedPath && editor.fileContentData && (
                        <FileEditor
                            selectedFile={editor.selectedFile}
                            fileType={editor.fileType}
                            isEditable={editor.isEditable}
                            isJson={editor.isJson}
                            displayContent={editor.displayContent}
                            hasUnsavedChanges={editor.hasUnsavedChanges}
                            jsonError={editor.jsonError}
                            resolvedTheme={resolvedTheme}
                            isSaving={editor.isSaving}
                            onChange={editor.handleChange}
                            onJsonChange={editor.handleJsonChange}
                            onClose={() => editor.handleSelectFile('')}
                            onSave={editor.handleSave}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AgentConfigContent