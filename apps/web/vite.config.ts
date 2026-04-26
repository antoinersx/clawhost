import { defineConfig, loadEnv } from 'vite'
import { existsSync, readFileSync } from 'fs'

import path from 'path'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import viteCompression from 'vite-plugin-compression'
import viteMdxSanitize from './src/plugins/vite-mdx-sanitize'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    const pkg = JSON.parse(
        readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8')
    )
    const wrangler = JSON.parse(
        readFileSync(path.resolve(__dirname, 'wrangler.json'), 'utf-8')
    )
    const wranglerEnv =
        mode === 'production'
            ? Object.fromEntries(
                  Object.entries(wrangler.vars || {}).map(([key, value]) => [
                      `import.meta.env.${key}`,
                      JSON.stringify(value)
                  ])
              )
            : {}

    return {
        define: {
            __APP_VERSION__: JSON.stringify(`v${pkg.version}`),
            ...wranglerEnv
        },
        plugins: [
            viteMdxSanitize(),
            mdx({
                remarkPlugins: [
                    remarkGfm,
                    remarkFrontmatter,
                    remarkMdxFrontmatter
                ]
            }),
            react(),
            viteCompression({ algorithm: 'gzip', threshold: 1024 }),
            viteCompression({ algorithm: 'brotliCompress', threshold: 1024 })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            },
            dedupe: [
                '@codemirror/state',
                '@codemirror/view',
                '@codemirror/language',
                '@lezer/common',
                '@lezer/highlight',
                '@lezer/lr',
                '@xterm/xterm'
            ]
        },
        build: {
            sourcemap: false,
            rollupOptions: {
                output: {
                    manualChunks: {
                        'framer-motion': ['framer-motion'],
                        codemirror: [
                            '@codemirror/state',
                            '@codemirror/view',
                            '@codemirror/language',
                            '@codemirror/lang-json'
                        ],
                        recharts: ['recharts'],
                        phosphor: ['@phosphor-icons/react'],
                        firebase: ['firebase/app', 'firebase/auth'],
                        tanstack: ['@tanstack/react-query']
                    }
                }
            }
        },
        server: {
            port: Number(env.VITE_PORT) || 1111,
            https: existsSync(path.resolve(__dirname, '.certs/cert.pem'))
                ? {
                      key: readFileSync(
                          path.resolve(__dirname, '.certs/key.pem')
                      ),
                      cert: readFileSync(
                          path.resolve(__dirname, '.certs/cert.pem')
                      )
                  }
                : undefined,
            proxy: {
                '/ws': {
                    target: `ws://localhost:${env.VITE_WS_PORT}`,
                    ws: true
                },
                '/api': {
                    target: `http://localhost:${env.VITE_API_PORT}`,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
                '/__/auth': {
                    target: 'https://maiclaw.firebaseapp.com',
                    changeOrigin: true,
                    secure: true
                },
                '/__/firebase': {
                    target: 'https://maiclaw.firebaseapp.com',
                    changeOrigin: true,
                    secure: true
                }
            },
            setupMiddlewares(middlewares) {
                const port = Number(env.VITE_PORT) || 1111
                middlewares.unshift({
                    name: 'firebase-init-override',
                    path: '/__/firebase/init.json',
                    handler(_req, res) {
                        res.setHeader('Content-Type', 'application/json')
                        res.end(
                            JSON.stringify({
                                apiKey: env.VITE_FIREBASE_API_KEY,
                                appId: env.VITE_FIREBASE_APP_ID,
                                authDomain: `localhost:${port}`,
                                databaseURL: '',
                                messagingSenderId:
                                    env.VITE_FIREBASE_MESSAGING_SENDER_ID,
                                projectId: env.VITE_FIREBASE_PROJECT_ID,
                                storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET
                            })
                        )
                    }
                })
                return middlewares
            }
        }
    }
})