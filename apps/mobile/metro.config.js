const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const projectRoot = __dirname
const monorepoRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

config.watchFolders = [monorepoRoot]

config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(monorepoRoot, 'node_modules')
]

config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs']

const reactPath = path.resolve(projectRoot, 'node_modules/react')
const defaultResolveRequest = config.resolver.resolveRequest

config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (moduleName === 'react' || moduleName.startsWith('react/')) {
        const suffix = moduleName === 'react' ? '' : moduleName.slice(5)
        return {
            type: 'sourceFile',
            filePath: require.resolve(`${reactPath}${suffix}`)
        }
    }
    return defaultResolveRequest
        ? defaultResolveRequest(context, moduleName, platform)
        : context.resolveRequest(context, moduleName, platform)
}

module.exports = config
