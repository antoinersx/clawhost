import type { FC, ReactNode } from 'react'
import type { FileTreeItemProps } from '@/ts/Interfaces'

import { getFileIconColor } from '@/components/dashboard/AgentConfigDialog/editorThemes'
import { getFileIconByName } from '@/components/dashboard/AgentConfigDialog'

const FileTreeItem: FC<FileTreeItemProps> = ({
    file,
    isLast,
    selectedPath,
    onSelectFile
}): ReactNode => {
    return (
        <button
            onClick={() => onSelectFile(file.path)}
            className={`relative flex w-full items-center gap-2 py-1.5 pl-5 pr-3 text-left text-xs transition-colors ${
                isLast
                    ? "before:border-muted-foreground/20 before:absolute before:left-0 before:top-0 before:h-1/2 before:w-3 before:border-b before:border-l before:content-['']"
                    : "before:bg-muted-foreground/20 after:bg-muted-foreground/20 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:content-[''] after:absolute after:left-0 after:top-1/2 after:h-px after:w-3 after:-translate-y-px after:content-['']"
            } ${
                selectedPath === file.path
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground/80'
            }`}
        >
            {getFileIconByName(file.name, getFileIconColor(file.fileType))}
            <span className='truncate'>{file.name}</span>
        </button>
    )
}

export default FileTreeItem