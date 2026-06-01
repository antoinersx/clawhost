import type { IpcMainInvokeEvent } from 'electron'

import { ipcMain } from 'electron'

type IpcHandlerFn<T> = (
    event: IpcMainInvokeEvent,
    ...args: never[]
) => Promise<T> | T

type BeforeHook = (channel: string, args: unknown[]) => void | Promise<void>
type AfterHook = (
    channel: string,
    args: unknown[],
    result: unknown
) => void | Promise<void>
type ErrorHook = (channel: string, args: unknown[], error: unknown) => void

const beforeHooks: BeforeHook[] = []
const afterHooks: AfterHook[] = []
const errorHooks: ErrorHook[] = []

const handle = <T>(channel: string, fn: IpcHandlerFn<T>): void => {
    ipcMain.handle(channel, async (event, ...args: unknown[]) => {
        try {
            for (const hook of beforeHooks) await hook(channel, args)
            const result = await (
                fn as (event: IpcMainInvokeEvent, ...a: unknown[]) => unknown
            )(event, ...args)
            for (const hook of afterHooks) await hook(channel, args, result)
            return result
        } catch (error) {
            for (const hook of errorHooks) hook(channel, args, error)
            throw error
        }
    })
}

const onBefore = (hook: BeforeHook): void => {
    beforeHooks.push(hook)
}

const onAfter = (hook: AfterHook): void => {
    afterHooks.push(hook)
}

const onError = (hook: ErrorHook): void => {
    errorHooks.push(hook)
}

const ipcPipeline = { handle, onBefore, onAfter, onError }

export default ipcPipeline