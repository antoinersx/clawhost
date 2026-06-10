import type { FC, ReactNode } from 'react'
import type {
    EmojiColorPickerProps,
    EmojiMartData,
    EmojiSelectEvent
} from '@/ts/Interfaces'

import { useState, useCallback, useEffect } from 'react'
import { t } from '@openclaw/i18n'
import { ShuffleIcon, TrashIcon } from '@phosphor-icons/react'
import Picker from '@emoji-mart/react'
import { usePreferencesStore } from '@/lib/store'
import { AVATAR_COLORS, THEMES, AGENT_AVATAR_SIZE } from '@/lib/constants'
import { randomColor } from '@/lib/agent-utils'
import { AgentAvatar } from '@/components/shared'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent
} from '@/components/ui'
import { ColorSwatch } from '@/components/dashboard/EmojiColorPicker'

const EmojiColorPicker: FC<EmojiColorPickerProps> = ({
    emoji,
    emojiColor,
    agentType,
    onEmojiChange
}): ReactNode => {
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [emojiData, setEmojiData] = useState<unknown>(null)
    const storeTheme = usePreferencesStore((s) => s.theme)
    const isDark =
        storeTheme === THEMES.DARK ||
        (storeTheme === THEMES.SYSTEM &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)

    useEffect(() => {
        if (emojiOpen && !emojiData) {
            import('@emoji-mart/data').then((mod) => setEmojiData(mod.default))
        }
    }, [emojiOpen, emojiData])

    const handleEmojiSelect = useCallback(
        (selected: string | null) => {
            onEmojiChange(selected, emojiColor)
            setEmojiOpen(false)
        },
        [onEmojiChange, emojiColor]
    )

    const handleColorSelect = useCallback(
        (color: string | null) => {
            onEmojiChange(emoji, color)
        },
        [onEmojiChange, emoji]
    )

    const handleRandomize = useCallback(async () => {
        const data = emojiData ?? (await import('@emoji-mart/data')).default
        if (!emojiData) setEmojiData(data)
        const emojis = (data as EmojiMartData).emojis
        const keys = Object.keys(emojis)
        const randomKey = keys[Math.floor(Math.random() * keys.length)]
        const emojiEntry = emojis[randomKey]
        if (emojiEntry?.skins?.[0]?.native)
            onEmojiChange(emojiEntry.skins[0].native, randomColor())
    }, [onEmojiChange, emojiData])

    return (
        <div className='space-y-5'>
            <div>
                <label className='text-muted-foreground mb-2 block text-xs font-medium'>
                    {t('clawDetail.settingsIcon')}
                </label>
                <div className='flex items-center gap-3'>
                    <DropdownMenu open={emojiOpen} onOpenChange={setEmojiOpen}>
                        <DropdownMenuTrigger asChild>
                            <button className='hover:bg-foreground/10 rounded-xl transition-colors'>
                                <AgentAvatar
                                    emoji={emoji}
                                    emojiColor={emojiColor}
                                    agentType={agentType}
                                    size={AGENT_AVATAR_SIZE.LG}
                                />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side='bottom'
                            align='start'
                            className='p-0'
                        >
                            {emojiData ? (
                                <Picker
                                    data={emojiData}
                                    onEmojiSelect={(e: EmojiSelectEvent) =>
                                        handleEmojiSelect(e.native)
                                    }
                                    theme={isDark ? 'dark' : 'light'}
                                    set='native'
                                    skinTonePosition='none'
                                    previewPosition='none'
                                    perLine={8}
                                    maxFrequentRows={1}
                                />
                            ) : (
                                <div className='flex h-[350px] w-[352px] items-center justify-center'>
                                    <div className='border-primary h-5 w-5 animate-spin rounded-full border-2 border-t-transparent' />
                                </div>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className='flex flex-col gap-2'>
                        <p className='text-muted-foreground text-[11px]'>
                            {t('clawDetail.settingsIconDescription')}
                        </p>
                        <div className='flex items-center gap-3'>
                            <button
                                onClick={handleRandomize}
                                className='text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-[11px] transition-colors'
                            >
                                <ShuffleIcon className='h-3 w-3' />
                                {t('clawDetail.settingsIconRandomize')}
                            </button>
                            {emoji && (
                                <button
                                    onClick={() => handleEmojiSelect(null)}
                                    className='text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-[11px] transition-colors'
                                >
                                    <TrashIcon className='h-3 w-3' />
                                    {t('clawDetail.settingsIconRemove')}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className='text-muted-foreground mb-2 block text-xs font-medium'>
                    {t('clawDetail.settingsBackground')}
                </label>
                <div className='flex flex-wrap items-center gap-1.5'>
                    <ColorSwatch
                        color={null}
                        selected={!emojiColor}
                        onClick={() => handleColorSelect(null)}
                    />
                    {AVATAR_COLORS.map((color) => (
                        <ColorSwatch
                            key={color}
                            color={color}
                            selected={emojiColor === color}
                            onClick={() => handleColorSelect(color)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmojiColorPicker