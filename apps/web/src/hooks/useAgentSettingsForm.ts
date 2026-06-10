import type { Agent } from '@/ts/Interfaces'
import type { UseAgentSettingsFormReturn } from '@/ts/Interfaces'

import { useCallback, useEffect, useRef, useState } from 'react'
import { t } from '@openclaw/i18n'
import { inputValidation } from '@openclaw/shared'
import {
    useRenameAgent,
    useUpdateAgentSubdomain,
    useUpdateAgentEmoji
} from '@/hooks/useAgents'
import { useAbortController } from '@/hooks'
import { useUIStore } from '@/lib/store'
import { TOAST_TYPE } from '@/lib/constants'
import { api, handleAbortToast } from '@/lib'

const SUBDOMAIN_CHECK_DELAY = 500

const useAgentSettingsForm = (agent: Agent): UseAgentSettingsFormReturn => {
    const [settingsEmoji, setSettingsEmoji] = useState<string | null>(
        agent.emoji
    )
    const [settingsEmojiColor, setSettingsEmojiColor] = useState<string | null>(
        agent.emojiColor
    )
    const [settingsName, setSettingsName] = useState(agent.name)
    const [settingsNameError, setSettingsNameError] = useState('')
    const [settingsSubdomain, setSettingsSubdomain] = useState(
        agent.subdomain || ''
    )
    const [settingsSubdomainError, setSettingsSubdomainError] = useState('')
    const [subdomainChecking, setSubdomainChecking] = useState(false)
    const renameMutation = useRenameAgent()
    const subdomainMutation = useUpdateAgentSubdomain()
    const emojiMutation = useUpdateAgentEmoji()
    const getSaveSignal = useAbortController()
    const { showToast } = useUIStore()
    const checkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        setSettingsEmoji(agent.emoji)
        setSettingsEmojiColor(agent.emojiColor)
    }, [agent.emoji, agent.emojiColor])

    useEffect(() => {
        setSettingsName(agent.name)
        setSettingsNameError('')
    }, [agent.name])

    useEffect(() => {
        setSettingsSubdomain(agent.subdomain || '')
        setSettingsSubdomainError('')
    }, [agent.subdomain])

    const subdomainRegex = new RegExp(
        `^[a-z0-9]{${inputValidation.SUBDOMAIN.MIN},${inputValidation.SUBDOMAIN.MAX}}$`
    )

    const handleSettingsNameChange = useCallback((value: string) => {
        setSettingsName(value)
        if (value.trim() && !/^[a-zA-Z0-9-]+$/.test(value)) {
            setSettingsNameError(t('dashboard.renameInvalidChars'))
        } else {
            setSettingsNameError('')
        }
    }, [])

    const handleSettingsSubdomainChange = useCallback(
        (value: string) => {
            setSettingsSubdomain(value)

            if (checkTimerRef.current) clearTimeout(checkTimerRef.current)

            if (!value.trim() || !subdomainRegex.test(value)) {
                setSubdomainChecking(false)
                setSettingsSubdomainError(
                    t('clawDetail.subdomainInvalid', {
                        min: inputValidation.SUBDOMAIN.MIN,
                        max: inputValidation.SUBDOMAIN.MAX
                    })
                )
                return
            }

            if (value.trim() === (agent.subdomain || '')) {
                setSubdomainChecking(false)
                setSettingsSubdomainError('')
                return
            }

            setSubdomainChecking(true)
            setSettingsSubdomainError('')

            checkTimerRef.current = setTimeout(async () => {
                try {
                    const result = await api.checkSubdomain(value.trim())
                    if (!result.available) {
                        setSettingsSubdomainError(
                            t('clawDetail.subdomainInUse')
                        )
                    }
                } catch {
                    setSettingsSubdomainError(
                        t('clawDetail.subdomainUpdateFailed')
                    )
                } finally {
                    setSubdomainChecking(false)
                }
            }, SUBDOMAIN_CHECK_DELAY)
        },
        [agent.subdomain, subdomainRegex]
    )

    useEffect(() => {
        return () => {
            if (checkTimerRef.current) clearTimeout(checkTimerRef.current)
        }
    }, [])

    const emojiHasChanges =
        settingsEmoji !== agent.emoji || settingsEmojiColor !== agent.emojiColor
    const nameHasChanges = settingsName.trim() !== agent.name
    const subdomainHasChanges =
        settingsSubdomain.trim() !== (agent.subdomain || '')
    const settingsHasChanges =
        emojiHasChanges || nameHasChanges || subdomainHasChanges

    const handleEmojiChange = useCallback(
        (emoji: string | null, emojiColor: string | null) => {
            setSettingsEmoji(emoji)
            setSettingsEmojiColor(emojiColor)
        },
        []
    )

    const handleSettingsSave = useCallback(() => {
        const trimmedName = settingsName.trim()
        const trimmedSubdomain = settingsSubdomain.trim()

        if (
            nameHasChanges &&
            trimmedName &&
            !/^[a-zA-Z0-9-]+$/.test(trimmedName)
        ) {
            setSettingsNameError(t('dashboard.renameInvalidChars'))
            return
        }

        if (
            subdomainHasChanges &&
            trimmedSubdomain &&
            !subdomainRegex.test(trimmedSubdomain)
        ) {
            setSettingsSubdomainError(
                t('clawDetail.subdomainInvalid', {
                    min: inputValidation.SUBDOMAIN.MIN,
                    max: inputValidation.SUBDOMAIN.MAX
                })
            )
            return
        }

        const mutations: Promise<unknown>[] = []
        const signal = getSaveSignal()

        if (emojiHasChanges)
            mutations.push(
                emojiMutation.mutateAsync({
                    id: agent.id,
                    emoji: settingsEmoji,
                    emojiColor: settingsEmojiColor,
                    signal
                })
            )

        if (nameHasChanges && trimmedName && trimmedName !== agent.name)
            mutations.push(
                renameMutation.mutateAsync({
                    id: agent.id,
                    name: trimmedName,
                    signal
                })
            )

        if (
            subdomainHasChanges &&
            trimmedSubdomain &&
            trimmedSubdomain !== (agent.subdomain || '')
        )
            mutations.push(
                subdomainMutation.mutateAsync({
                    id: agent.id,
                    subdomain: trimmedSubdomain,
                    signal
                })
            )

        if (mutations.length === 0) return

        Promise.all(mutations)
            .then(() =>
                showToast(t('clawDetail.settingsUpdated'), TOAST_TYPE.SUCCESS)
            )
            .catch((error) => {
                if (
                    handleAbortToast(
                        error,
                        showToast,
                        'clawDetail.saveCanceledNavigation'
                    )
                )
                    return
                showToast(
                    t('clawDetail.settingsUpdateFailed'),
                    TOAST_TYPE.ERROR
                )
            })
    }, [
        settingsEmoji,
        settingsEmojiColor,
        settingsName,
        settingsSubdomain,
        agent.emoji,
        agent.emojiColor,
        agent.name,
        agent.subdomain,
        agent.id,
        emojiHasChanges,
        nameHasChanges,
        subdomainHasChanges,
        emojiMutation,
        renameMutation,
        subdomainMutation,
        subdomainRegex,
        getSaveSignal,
        showToast
    ])

    return {
        settingsEmoji,
        settingsEmojiColor,
        settingsName,
        settingsNameError,
        settingsSubdomain,
        settingsSubdomainError,
        settingsHasChanges,
        renamePending: renameMutation.isPending,
        subdomainPending: subdomainMutation.isPending || subdomainChecking,
        emojiPending: emojiMutation.isPending,
        handleEmojiChange,
        handleSettingsNameChange,
        handleSettingsSubdomainChange,
        handleSettingsSave
    }
}

export default useAgentSettingsForm