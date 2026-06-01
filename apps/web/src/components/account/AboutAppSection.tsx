import type { FC, ReactNode } from 'react'
import type {
    AboutAppSectionProps,
    AppUpdateInfo,
    ElectronWindow
} from '@/ts/Interfaces'

import { Fragment, useState } from 'react'
import { t } from '@openclaw/i18n'
import {
    ArrowClockwiseIcon,
    CircleNotchIcon,
    CheckCircleIcon
} from '@phosphor-icons/react'
import { Button } from '@/components/ui'

const PLATFORM_LABELS: Record<string, string> = {
    darwin: 'macOS',
    win32: 'Windows',
    linux: 'Linux'
}

const CHECK_STATUS = {
    IDLE: 'idle',
    CHECKING: 'checking',
    UP_TO_DATE: 'up-to-date',
    UPDATE_READY: 'update-ready'
} as const

type CheckStatus = (typeof CHECK_STATUS)[keyof typeof CHECK_STATUS]

const AboutAppSection: FC<AboutAppSectionProps> = ({
    version,
    deviceInfo
}): ReactNode => {
    const [status, setStatus] = useState<CheckStatus>(CHECK_STATUS.IDLE)
    const [latestVersion, setLatestVersion] = useState<string | null>(null)
    const api = (window as unknown as ElectronWindow).electronAPI

    const platformLabel = deviceInfo
        ? (PLATFORM_LABELS[deviceInfo.platform] ?? deviceInfo.platform)
        : null

    const handleCheck = async (): Promise<void> => {
        if (!api?.checkForUpdatesNow) return
        setStatus(CHECK_STATUS.CHECKING)
        try {
            const info: AppUpdateInfo = await api.checkForUpdatesNow()
            if (info.hasUpdate && info.latestVersion) {
                setLatestVersion(info.latestVersion)
                setStatus(CHECK_STATUS.UPDATE_READY)
            } else {
                setStatus(CHECK_STATUS.UP_TO_DATE)
            }
        } catch (error) {
            console.error('AboutAppSection', error)
            setStatus(CHECK_STATUS.IDLE)
        }
    }

    const handleInstall = (): void => {
        api?.quitAndInstall?.()
    }

    return (
        <div className='border-border bg-foreground/5 mt-6 rounded-xl border p-8 backdrop-blur-sm'>
            <div className='mb-6'>
                <h2 className='text-lg font-medium'>{t('account.aboutApp')}</h2>
                <p className='text-muted-foreground mt-1 text-sm'>
                    {t('account.aboutAppDescription')}
                </p>
            </div>

            <div className='divide-border divide-y'>
                <div className='flex items-center justify-between py-3 first:pt-0 last:pb-0'>
                    <span className='text-foreground text-sm'>
                        {t('account.appVersion')}
                    </span>
                    <span className='text-muted-foreground text-sm tabular-nums'>
                        {version}
                    </span>
                </div>
                {platformLabel && (
                    <div className='flex items-center justify-between py-3 first:pt-0 last:pb-0'>
                        <span className='text-foreground text-sm'>
                            {t('account.operatingSystem')}
                        </span>
                        <span className='text-muted-foreground text-sm'>
                            {platformLabel}
                        </span>
                    </div>
                )}
                {deviceInfo && (
                    <div className='flex items-center justify-between py-3 first:pt-0 last:pb-0'>
                        <span className='text-foreground text-sm'>
                            {t('account.architecture')}
                        </span>
                        <span className='text-muted-foreground text-sm'>
                            {deviceInfo.arch}
                        </span>
                    </div>
                )}
                <div className='flex items-center justify-between py-3 first:pt-0 last:pb-0'>
                    <div className='flex flex-col'>
                        <span className='text-foreground text-sm'>
                            {t('account.checkForUpdates')}
                        </span>
                        {status === CHECK_STATUS.UP_TO_DATE && (
                            <span className='text-muted-foreground mt-0.5 text-xs'>
                                {t('account.updatesUpToDate')}
                            </span>
                        )}
                        {status === CHECK_STATUS.UPDATE_READY &&
                            latestVersion && (
                                <span className='text-muted-foreground mt-0.5 text-xs'>
                                    {t('account.updateReady', {
                                        version: latestVersion
                                    })}
                                </span>
                            )}
                    </div>
                    {status === CHECK_STATUS.UPDATE_READY ? (
                        <Button
                            size='sm'
                            onClick={handleInstall}
                            className='gap-1.5'
                        >
                            <ArrowClockwiseIcon className='h-4 w-4' />
                            {t('account.restartToInstall')}
                        </Button>
                    ) : (
                        <Button
                            size='sm'
                            variant='outline'
                            disabled={status === CHECK_STATUS.CHECKING}
                            onClick={handleCheck}
                            className='gap-1.5'
                        >
                            {status === CHECK_STATUS.CHECKING && (
                                <CircleNotchIcon className='h-4 w-4 animate-spin' />
                            )}
                            {status === CHECK_STATUS.UP_TO_DATE && (
                                <Fragment>
                                    <CheckCircleIcon
                                        className='h-4 w-4'
                                        weight='fill'
                                    />
                                </Fragment>
                            )}
                            {status === CHECK_STATUS.IDLE && (
                                <ArrowClockwiseIcon className='h-4 w-4' />
                            )}
                            {t('account.checkNow')}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AboutAppSection