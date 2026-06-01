import { EventEmitter } from 'events'

const MAX_LISTENERS = 50

const emitter = new EventEmitter()
emitter.setMaxListeners(MAX_LISTENERS)

const on = <T>(event: string, listener: (payload: T) => void): void => {
    emitter.on(event, listener)
}

const off = <T>(event: string, listener: (payload: T) => void): void => {
    emitter.off(event, listener)
}

const emit = <T>(event: string, payload: T): void => {
    emitter.emit(event, payload)
}

const domainEvents = { on, off, emit }

export default domainEvents