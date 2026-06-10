import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const { version } = JSON.parse(
    readFileSync(join(import.meta.dirname, '../../../package.json'), 'utf-8')
)

export default `v${version}`