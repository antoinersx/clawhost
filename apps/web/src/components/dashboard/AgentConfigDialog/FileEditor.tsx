import type { FC, ReactNode } from 'react'
import type { FileEditorProps } from '@/ts/Interfaces'
import type { Extension } from '@codemirror/state'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { t } from '@openclaw/i18n'
import { CircleNotchIcon, FloppyDiskIcon, XIcon } from '@phosphor-icons/react'
import CodeMirror from '@uiw/react-codemirror'
import { keymap } from '@codemirror/view'
import { THEMES } from '@/lib'
import {
    darkTheme,
    lightTheme,
    editorStyles,
    getLanguageExtension,
    getFileIconColor
} from '@/components/dashboard/AgentConfigDialog/editorThemes'
import { getFileIconByName } from '@/components/dashboard/AgentConfigDialog'

const FileEditor: FC<FileEditorProps> = ({
    selectedFile,
    fileType,
    isEditable,
    isJson,
    displayContent,
    hasUnsavedChanges,
    jsonError,
    resolvedTheme,
    onChange,
    onJsonChange,
    onClose,
    onSave,
    isSaving
}): ReactNode => {
    const [langExt, setLangExt] = useState<Extension | null>(null)
    const filename = selectedFile?.name || ''

    useEffect(() => {
        getLanguageExtension(filename).then(setLangExt)
    }, [filename])

    const handleSave = useCallback(() => {
        if (hasUnsavedChanges && !jsonError && isEditable) onSave()
    }, [hasUnsavedChanges, jsonError, isEditable, onSave])

    const saveKeymap = useMemo(
        () =>
            keymap.of([
                {
                    key: 'Mod-s',
                    run: () => {
                        handleSave()
                        return true
                    }
                }
            ]),
        [handleSave]
    )

    const editorExtensions = useMemo(
        () =>
            langExt
                ? [langExt, editorStyles, saveKeymap]
                : [editorStyles, saveKeymap],
        [langExt, saveKeymap]
    )

    const canSave = isEditable && hasUnsavedChanges && !jsonError && !isSaving

    return (
        <div className='flex min-h-0 flex-1 flex-col overflow-hidden pb-2'>
            <div className='flex shrink-0 items-end justify-between gap-2'>
                <div className='border-border bg-muted text-foreground/80 flex items-center gap-1.5 rounded-t-md border border-b-0 px-3 py-1.5 text-xs'>
                    {getFileIconByName(filename, getFileIconColor(fileType))}
                    {filename}
                    {hasUnsavedChanges && (
                        <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-white/80' />
                    )}
                    {!isEditable && (
                        <span className='bg-muted text-muted-foreground ml-0.5 rounded-full px-2 py-px text-[10px] lowercase'>
                            {t('dashboard.fileExplorerReadOnly')}
                        </span>
                    )}
                    <button
                        onClick={onClose}
                        className='text-muted-foreground hover:bg-foreground/10 hover:text-foreground/80 ml-0.5 rounded p-0.5 transition-colors'
                    >
                        <XIcon className='h-3 w-3' />
                    </button>
                </div>
                {isEditable && (
                    <button
                        onClick={handleSave}
                        disabled={!canSave}
                        className='mb-1 flex shrink-0 items-center gap-1.5 rounded-md bg-[#ef5350] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#e53935] disabled:opacity-30'
                    >
                        {isSaving ? (
                            <CircleNotchIcon className='h-3.5 w-3.5 animate-spin' />
                        ) : (
                            <FloppyDiskIcon className='h-3.5 w-3.5' />
                        )}
                        {t('dashboard.fileExplorerSave')}
                    </button>
                )}
            </div>
            <div
                className={`min-h-0 flex-1 overflow-auto rounded-b-md rounded-tr-md border bg-black [&_.cm-editor]:!h-full [&_.cm-editor_.cm-content]:!min-h-full [&_.cm-editor_.cm-gutters]:!min-h-full [&_.cm-editor_.cm-scroller]:!overflow-auto ${
                    jsonError ? 'border-red-500/50' : 'border-border'
                }`}
            >
                <CodeMirror
                    value={displayContent}
                    onChange={
                        isJson
                            ? onJsonChange
                            : isEditable
                              ? onChange
                              : undefined
                    }
                    readOnly={!isEditable}
                    extensions={editorExtensions}
                    theme={
                        resolvedTheme === THEMES.DARK ? darkTheme : lightTheme
                    }
                    height='100%'
                    basicSetup={{
                        lineNumbers: true,
                        foldGutter: isEditable,
                        bracketMatching: isEditable,
                        closeBrackets: isEditable,
                        highlightActiveLine: isEditable,
                        indentOnInput: isEditable
                    }}
                />
            </div>
            {jsonError && (
                <p className='shrink-0 text-xs text-red-600 dark:text-red-400'>
                    {t('dashboard.fileExplorerInvalidJson')}
                </p>
            )}
        </div>
    )
}

export default FileEditor