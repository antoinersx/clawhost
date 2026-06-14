import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const apps = ['apps/api', 'apps/web', 'apps/mobile', 'apps/clawhostgo']
const root = resolve(import.meta.dirname, '..')

for (const app of apps) {
    const pkgPath = resolve(root, app, 'package.json')
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
    const parts = pkg.version.split('.')
    parts[2] = String(Number(parts[2]) + 1)
    pkg.version = parts.join('.')
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 4))
}