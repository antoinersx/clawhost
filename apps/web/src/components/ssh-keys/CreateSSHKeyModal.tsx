import type { FC, ReactNode } from 'react'
import type { CreateSSHKeyModalProps, GeneratedKeyPair } from '@/ts/Interfaces'
import type { CopiedFieldType, SSHKeyModalMode } from '@/ts/Types'

import { useState } from 'react'
import { t } from '@openclaw/i18n'
import { useUIStore } from '@/lib/store'
import { SSH_KEY_MODAL_MODE, TOAST_TYPE } from '@/lib/constants'
import { copyToClipboard as copyText } from '@/lib'
import { useCreateSSHKey } from '@/hooks'
import {
    Alert,
    AlertDescription,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@/components/ui'
import { SSHKeyUploadForm, SSHKeyGenerateForm } from '@/components/ssh-keys'

const CreateSSHKeyModal: FC<CreateSSHKeyModalProps> = ({
    onClose
}): ReactNode => {
    const [mode, setMode] = useState<SSHKeyModalMode>(SSH_KEY_MODAL_MODE.UPLOAD)
    const [name, setName] = useState('')
    const [publicKey, setPublicKey] = useState('')
    const [generatedKeys, setGeneratedKeys] = useState<GeneratedKeyPair | null>(
        null
    )
    const [copied, setCopied] = useState<CopiedFieldType>(null)
    const [keyGenError, setKeyGenError] = useState('')
    const { showToast } = useUIStore()

    const createMutation = useCreateSSHKey()

    const handleCreate = () => {
        createMutation.mutate(
            {
                name,
                publicKey:
                    mode === SSH_KEY_MODAL_MODE.GENERATE && generatedKeys
                        ? generatedKeys.publicKey
                        : publicKey
            },
            {
                onSuccess: () => {
                    showToast(
                        t('sshKeys.sshKeyAddedSuccessfully'),
                        TOAST_TYPE.SUCCESS
                    )
                    onClose()
                },
                onError: (err: Error) => {
                    showToast(
                        err.message || t('errors.failedToAddSSHKey'),
                        TOAST_TYPE.ERROR
                    )
                }
            }
        )
    }

    const generateKeyPair = async () => {
        try {
            const keyPair = await crypto.subtle.generateKey(
                {
                    name: 'RSASSA-PKCS1-v1_5',
                    modulusLength: 4096,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: 'SHA-256'
                },
                true,
                ['sign', 'verify']
            )

            const publicKeyJwk = await crypto.subtle.exportKey(
                'jwk',
                keyPair.publicKey
            )
            const privateKeyBuffer = await crypto.subtle.exportKey(
                'pkcs8',
                keyPair.privateKey
            )

            const base64UrlToBytes = (base64url: string): Uint8Array => {
                const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/')
                const padding = '='.repeat((4 - (base64.length % 4)) % 4)
                const binary = atob(base64 + padding)
                return Uint8Array.from(binary, (c) => c.charCodeAt(0))
            }

            const n = base64UrlToBytes(publicKeyJwk.n!)
            const e = base64UrlToBytes(publicKeyJwk.e!)

            const encodeLength = (len: number): Uint8Array => {
                return new Uint8Array([
                    (len >> 24) & 0xff,
                    (len >> 16) & 0xff,
                    (len >> 8) & 0xff,
                    len & 0xff
                ])
            }

            const keyType = new TextEncoder().encode('ssh-rsa')

            // Ensure modulus has leading zero if high bit is set (SSH mpint format)
            const nWithPadding = n[0] & 0x80 ? new Uint8Array([0, ...n]) : n
            const eWithPadding = e[0] & 0x80 ? new Uint8Array([0, ...e]) : e

            const keyBlob = new Uint8Array([
                ...encodeLength(keyType.length),
                ...keyType,
                ...encodeLength(eWithPadding.length),
                ...eWithPadding,
                ...encodeLength(nWithPadding.length),
                ...nWithPadding
            ])

            const keyBlobBase64 = btoa(String.fromCharCode(...keyBlob))
            const sshPublicKey = `ssh-rsa ${keyBlobBase64} ${name || 'generated-key'}@clawhost`

            const privateKeyBase64 = btoa(
                String.fromCharCode(...new Uint8Array(privateKeyBuffer))
            )
            const pemPrivateKey = `-----BEGIN PRIVATE KEY-----\n${privateKeyBase64.match(/.{1,64}/g)?.join('\n')}\n-----END PRIVATE KEY-----`

            setGeneratedKeys({
                publicKey: sshPublicKey,
                privateKey: pemPrivateKey
            })
        } catch {
            setKeyGenError(t('errors.failedToGenerateKeyPair'))
        }
    }

    const copyToClipboard = async (
        text: string,
        type: NonNullable<CopiedFieldType>
    ) => {
        await copyText(text)
        setCopied(type)
        setTimeout(() => setCopied(null), 2000)
    }

    const downloadPrivateKey = () => {
        if (!generatedKeys) return
        const blob = new Blob([generatedKeys.privateKey], {
            type: 'text/plain'
        })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${name || 'id_rsa'}.pem`
        a.click()
        URL.revokeObjectURL(url)
    }

    return (
        <Dialog open onOpenChange={onClose}>
            <DialogContent className='max-h-[90vh] max-w-lg overflow-y-auto'>
                <DialogHeader className='pb-1.5'>
                    <DialogTitle>
                        {t('sshKeys.addSshKeyModalTitle')}
                    </DialogTitle>
                    <DialogDescription>
                        {t('sshKeys.addSshKeyModalDescription')}
                    </DialogDescription>
                    <div className='bg-muted !mt-3 flex gap-2 rounded-lg p-1'>
                        <button
                            type='button'
                            onClick={() => setMode(SSH_KEY_MODAL_MODE.UPLOAD)}
                            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                                mode === SSH_KEY_MODAL_MODE.UPLOAD
                                    ? 'bg-background shadow'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {t('sshKeys.iHaveAnSshKey')}
                        </button>
                        <button
                            type='button'
                            onClick={() => setMode(SSH_KEY_MODAL_MODE.GENERATE)}
                            className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                                mode === SSH_KEY_MODAL_MODE.GENERATE
                                    ? 'bg-background shadow'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {t('sshKeys.generateNewKey')}
                        </button>
                    </div>
                </DialogHeader>

                {keyGenError && (
                    <Alert variant='destructive'>
                        <AlertDescription>{keyGenError}</AlertDescription>
                    </Alert>
                )}

                {mode === SSH_KEY_MODAL_MODE.UPLOAD ? (
                    <SSHKeyUploadForm
                        name={name}
                        publicKey={publicKey}
                        copied={copied}
                        isPending={createMutation.isPending}
                        onNameChange={setName}
                        onPublicKeyChange={setPublicKey}
                        onCopyToClipboard={copyToClipboard}
                        onSubmit={handleCreate}
                        onClose={onClose}
                    />
                ) : (
                    <SSHKeyGenerateForm
                        name={name}
                        generatedKeys={generatedKeys}
                        copied={copied}
                        isPending={createMutation.isPending}
                        onNameChange={setName}
                        onGenerateKeyPair={generateKeyPair}
                        onCopyToClipboard={copyToClipboard}
                        onDownloadPrivateKey={downloadPrivateKey}
                        onSubmit={handleCreate}
                        onClose={onClose}
                    />
                )}
            </DialogContent>
        </Dialog>
    )
}

export default CreateSSHKeyModal