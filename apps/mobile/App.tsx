import type { FC, ReactNode } from 'react'
import type { Theme } from '@react-navigation/native'

import { ActivityIndicator, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider, useAuth } from '@/lib/auth'
import { COLORS } from '@/lib/theme'
import { RootNavigator } from '@/navigation'
import { LoginScreen } from '@/screens'

const queryClient = new QueryClient()

const navigationTheme: Theme = {
    dark: true,
    colors: {
        primary: COLORS.accent,
        background: COLORS.background,
        card: COLORS.surface,
        text: COLORS.text,
        border: COLORS.borderSolid,
        notification: COLORS.destructive
    },
    fonts: {
        regular: { fontFamily: 'Satoshi-Regular', fontWeight: '400' },
        medium: { fontFamily: 'Satoshi-Medium', fontWeight: '500' },
        bold: { fontFamily: 'Satoshi-Bold', fontWeight: '700' },
        heavy: { fontFamily: 'Satoshi-Bold', fontWeight: '900' }
    }
}

const AppContent: FC = (): ReactNode => {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.background,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ActivityIndicator size='large' color={COLORS.accent} />
            </View>
        )
    }

    if (!user) {
        return <LoginScreen />
    }

    return <RootNavigator />
}

const App: FC = (): ReactNode => {
    /* eslint-disable @typescript-eslint/no-require-imports */
    const [fontsLoaded] = useFonts({
        'Satoshi-Regular': require('./assets/fonts/Satoshi-Regular.otf'),
        'Satoshi-Medium': require('./assets/fonts/Satoshi-Medium.otf'),
        'Satoshi-Bold': require('./assets/fonts/Satoshi-Bold.otf'),
        'ClashDisplay-Medium': require('./assets/fonts/ClashDisplay-Medium.otf'),
        'ClashDisplay-Semibold': require('./assets/fonts/ClashDisplay-Semibold.otf'),
        'ClashDisplay-Bold': require('./assets/fonts/ClashDisplay-Bold.otf')
    })
    /* eslint-enable @typescript-eslint/no-require-imports */

    if (!fontsLoaded) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.background,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ActivityIndicator size='large' color={COLORS.accent} />
            </View>
        )
    }

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <SafeAreaProvider>
                    <NavigationContainer theme={navigationTheme}>
                        <StatusBar style='light' />
                        <AppContent />
                    </NavigationContainer>
                </SafeAreaProvider>
            </AuthProvider>
        </QueryClientProvider>
    )
}

export { App }