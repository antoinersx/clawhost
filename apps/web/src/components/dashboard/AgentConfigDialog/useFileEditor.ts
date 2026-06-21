import type { AgentFileType } from '@/ts/Types'
import type { UseFileEditorParams, UseFileEditorReturn } from '@/ts/Interfaces'

import { useState, useCallback } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { t } from '@openclaw/i18n'
import { agentFileType } from '@openclaw/shared'
import {
    useAgentFile,
    useUpdateAgentFile,
    useAbortController,
    AGENT_FILE_QUERY_KEY
} from '@/hooks'
import { useUIStore } from '@/lib/store'
import { TOAST_TYPE } from '@/lib/constants'
import { handleAbortToast } from '@/lib'
import { demoFileContent } from '@/data'

const useFileEditor = ({
    agentId,
    files,
    readOnly
}: UseFileEditorParams): UseFileEditorReturn => {
    const queryClient = useQueryClient()
    const updateFile = useUpdateAgentFile()
    const showToast = useUIStore((s) => s.showToast)
    const getSaveSignal = useAbortController()
    const [selectedPath, setSelectedPath] = useState('')
    const [editedContent, setEditedContent] = useState('')
    const [jsonError, setJsonError] = useState(false)

    const selectedFile = files?.find((f) => f.path === selectedPath)
    const fileType: AgentFileType =
        selectedFile?.fileType ?? agentFileType.unknown
    const isEditable = !readOnly
    const isJson = fileType === agentFileType.json

    const liveFileContent = useAgentFile(
        agentId,
        selectedPath,
        selectedPath.length > 0 && !readOnly
    )
    const fileContent =
        readOnly && selectedPath
            ? {
                  data: { ...demoFileContent, path: selectedPath },
                  isPending: false,
                  isError: false,
                  error: null
              }
            : liveFileContent

    const handleSelectFile = (path: string) => {
        if (path === selectedPath) return
        const previousPath = selectedPath
        setSelectedPath(path)
        setEditedContent('')
        setJsonError(false)
        updateFile.reset()
        queryClient.removeQueries({
            queryKey: [...AGENT_FILE_QUERY_KEY, agentId, previousPath]
        })
    }

    const formatContent = useCallback(
        (content: string, type: AgentFileType): string => {
            if (type === agentFileType.json) {
                try {
                    const parsed = JSON.parse(content)
                    return JSON.stringify(parsed, null, 4)
                } catch {
                    return content
                }
            }
            return content
        },
        []
    )

    const currentContent = fileContent.data?.content
    const formattedOriginal =
        currentContent !== undefined
            ? formatContent(currentContent, fileType)
            : ''
    const displayContent =
        currentContent !== undefined && editedContent === ''
            ? formattedOriginal
            : editedContent
    const hasUnsavedChanges =
        editedContent !== '' && editedContent !== formattedOriginal

    const handleChange = useCallback((value: string) => {
        setEditedContent(value)
    }, [])

    const handleJsonChange = useCallback((value: string) => {
        setEditedContent(value)
        try {
            JSON.parse(value)
            setJsonError(false)
        } catch {
            setJsonError(true)
        }
    }, [])

    const handleSave = () => {
        if (jsonError || !selectedPath || !isEditable) return

        const rawContent = editedContent || displayContent

        let content = rawContent
        if (isJson) {
            try {
                content = JSON.stringify(JSON.parse(rawContent))
            } catch {
                setJsonError(true)
                return
            }
        }

        updateFile.mutate(
            {
                id: agentId,
                data: { path: selectedPath, content },
                signal: getSaveSignal()
            },
            {
                onSuccess: () => {
                    setEditedContent('')
                    queryClient.invalidateQueries({
                        queryKey: [
                            ...AGENT_FILE_QUERY_KEY,
                            agentId,
                            selectedPath
                        ]
                    })
                    showToast(
                        t('dashboard.fileExplorerSaved'),
                        TOAST_TYPE.SUCCESS
                    )
                },
                onError: (err) => {
                    if (
                        handleAbortToast(
                            err,
                            showToast,
                            'dashboard.fileExplorerSaveCanceledNavigation'
                        )
                    )
                        return
                    showToast(
                        err.message || t('api.failedToUpdateFile'),
                        TOAST_TYPE.ERROR
                    )
                }
            }
        )
    }

    const reset = () => {
        setSelectedPath('')
        setEditedContent('')
        setJsonError(false)
        updateFile.reset()
    }

    return {
        selectedPath,
        editedContent,
        jsonError,
        selectedFile,
        fileType,
        isEditable,
        isJson,
        displayContent,
        hasUnsavedChanges,
        fileContentIsPending: fileContent.isPending,
        fileContentIsError: fileContent.isError,
        fileContentError: fileContent.error,
        fileContentData: fileContent.data,
        isSaving: updateFile.isPending,
        handleSelectFile,
        handleChange,
        handleJsonChange,
        handleSave,
        reset
    }
}

export default useFileEditor