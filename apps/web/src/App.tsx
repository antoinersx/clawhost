import type { FC, ReactNode } from 'react'

import { lazy, Suspense, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AUTH_DISABLED } from '@openclaw/shared'
import { AuthProvider } from '@/lib/auth'
import { ScrollToTop, Toast, ProtectedRoute } from '@/components'
import { TooltipProvider } from '@/components/ui'
import { ROUTES } from '@/lib'
import { useThemeEffect, useLanguageEffect, useRefer } from '@/hooks'

import Go from '@/pages/Go'
import Landing from '@/pages/Landing'
const Login = lazy(() => import('@/pages/Login'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const SSHKeys = lazy(() => import('@/pages/SSHKeys'))
const Account = lazy(() => import('@/pages/Account'))
const Affiliate = lazy(() => import('@/pages/Affiliate'))
const Admin = lazy(() => import('@/pages/Admin'))
const License = lazy(() => import('@/pages/License'))
const Terms = lazy(() => import('@/pages/Terms'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const Changelog = lazy(() => import('@/pages/Changelog'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const AffiliateProgram = lazy(() => import('@/pages/AffiliateProgram'))
const Compare = lazy(() => import('@/pages/Compare'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const App: FC = (): ReactNode => {
    useThemeEffect()
    useRefer()
    const language = useLanguageEffect()

    return (
        <TooltipProvider delayDuration={300}>
            <AuthProvider>
                <ScrollToTop />
                <Toast />
                <Suspense
                    key={language}
                    fallback={
                        <div className='bg-background flex min-h-screen items-center justify-center'>
                            <div className='h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent opacity-50' />
                        </div>
                    }
                >
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Landing />} />
                        <Route path={ROUTES.GO} element={<Go />} />
                        <Route path={ROUTES.TERMS} element={<Terms />} />
                        <Route path={ROUTES.PRIVACY} element={<Privacy />} />
                        <Route
                            path={ROUTES.CHANGELOG}
                            element={<Changelog />}
                        />
                        <Route path={ROUTES.BLOG_POST} element={<BlogPost />} />
                        <Route
                            path={ROUTES.AFFILIATE_PROGRAM}
                            element={<AffiliateProgram />}
                        />
                        <Route path={ROUTES.COMPARE} element={<Compare />} />
                        {!AUTH_DISABLED && (
                            <Fragment>
                                <Route
                                    path={ROUTES.LOGIN}
                                    element={<Login />}
                                />
                                <Route
                                    path={ROUTES.AGENTS}
                                    element={
                                        <ProtectedRoute>
                                            <Dashboard />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path={ROUTES.SSH_KEYS}
                                    element={
                                        <ProtectedRoute>
                                            <SSHKeys />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path={ROUTES.ACCOUNT}
                                    element={
                                        <ProtectedRoute>
                                            <Account />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path={ROUTES.AFFILIATE}
                                    element={
                                        <ProtectedRoute>
                                            <Affiliate />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path={ROUTES.ADMIN}
                                    element={
                                        <ProtectedRoute>
                                            <Admin />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path={ROUTES.LICENSE}
                                    element={
                                        <ProtectedRoute>
                                            <License />
                                        </ProtectedRoute>
                                    }
                                />
                            </Fragment>
                        )}
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
            </AuthProvider>
        </TooltipProvider>
    )
}

export default App