import type { FC, ReactNode } from 'react'
import type { FileTreeProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { t } from '@openclaw/i18n'
import { FolderOpenIcon } from '@phosphor-icons/react'
import { FileTreeItem } from '@/components/dashboard/AgentConfigDialog'

const FileTree: FC<FileTreeProps> = ({
    folders,
    rootFiles,
    selectedPath,
    onSelectFile
}): ReactNode => {
    return (
        <Fragment>
            <div className='text-muted-foreground flex items-center gap-1.5 px-3 pb-1 pt-2 text-xs font-medium'>
                <FolderOpenIcon className='h-3.5 w-3.5 shrink-0' />
                {t('dashboard.fileExplorerRoot')}
            </div>
            <div className='ml-[19px]'>
                {folders.map(([dir, dirFiles], index) => {
                    const isLastRootChild =
                        index === folders.length - 1 && rootFiles.length === 0
                    return (
                        <div key={dir}>
                            <div
                                className={`text-muted-foreground relative flex items-center gap-1.5 py-1.5 pl-5 pr-3 text-xs font-medium ${
                                    isLastRootChild
                                        ? "before:border-muted-foreground/20 before:absolute before:left-0 before:top-0 before:h-1/2 before:w-3 before:border-b before:border-l before:content-['']"
                                        : "before:bg-muted-foreground/20 after:bg-muted-foreground/20 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:content-[''] after:absolute after:left-0 after:top-1/2 after:h-px after:w-3 after:-translate-y-px after:content-['']"
                                }`}
                            >
                                <FolderOpenIcon className='h-3.5 w-3.5 shrink-0' />
                                {dir}
                            </div>
                            <div
                                className={
                                    !isLastRootChild
                                        ? 'border-muted-foreground/20 border-l'
                                        : ''
                                }
                            >
                                <div className='ml-[19px]'>
                                    {dirFiles.map((file, fi) => (
                                        <FileTreeItem
                                            key={file.path}
                                            file={file}
                                            isLast={fi === dirFiles.length - 1}
                                            selectedPath={selectedPath}
                                            onSelectFile={onSelectFile}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })}
                {rootFiles.map((file, index) => (
                    <FileTreeItem
                        key={file.path}
                        file={file}
                        isLast={index === rootFiles.length - 1}
                        selectedPath={selectedPath}
                        onSelectFile={onSelectFile}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default FileTree