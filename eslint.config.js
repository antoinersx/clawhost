import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
    {
        ignores: [
            '**/dist/**',
            '**/node_modules/**',
            '**/build/**',
            '**/.turbo/**',
            '**/drizzle/**',
            '**/.next/**',
            '**/next-env.d.ts',
            '**/*.config.js',
            '**/*.config.cjs',
            '**/out/**',
            '**/.vite/**',
            'apps/clawhostgo/resources/**',
            'apps/clawhostgo/scripts/*.js',
            'resources/**',
            '**/android/**',
            '**/ios/**',
            '**/.expo/**'
        ]
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            globals: {
                ...globals.es6,
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin
        },
        rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            indent: ['error', 4],
            'linebreak-style': 'off',
            quotes: ['error', 'single'],
            semi: ['error', 'never'],
            'comma-dangle': ['error', 'never'],
            'jsx-quotes': ['error', 'prefer-single'],
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxEOF: 0,
                    maxBOF: 0
                }
            ],
            'eol-last': ['error', 'never'],
            'no-empty': ['error', { allowEmptyCatch: true }]
        }
    },
    {
        files: ['apps/web/**/*.{ts,tsx}'],
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-hooks/exhaustive-deps': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ]
        }
    },
    {
        files: ['apps/clawhostgo/src/renderer/**/*.{ts,tsx}'],
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-hooks/exhaustive-deps': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true }
            ]
        }
    },
    {
        files: ['apps/mobile/**/*.{ts,tsx}'],
        plugins: {
            'react-hooks': reactHooks
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-hooks/exhaustive-deps': 'off'
        }
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
            ]
        }
    },
    prettier,
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
        rules: {
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxEOF: 0,
                    maxBOF: 0
                }
            ],
            'eol-last': ['error', 'never']
        }
    }
)
