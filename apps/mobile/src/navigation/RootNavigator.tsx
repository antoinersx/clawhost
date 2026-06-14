import type { FC, ReactNode } from 'react'
import type { RootStackParamList } from '@/ts/Types'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from '@/navigation/TabNavigator'
import {
    ClawDetailScreen,
    DiagnosticsScreen,
    VersionsScreen,
    FilesScreen,
    FileEditorScreen,
    TerminalScreen,
    SSHKeysScreen
} from '@/screens'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator: FC = (): ReactNode => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tabs' component={TabNavigator} />
            <Stack.Screen name='ClawDetail' component={ClawDetailScreen} />
            <Stack.Screen name='SSHKeys' component={SSHKeysScreen} />
            <Stack.Screen name='Diagnostics' component={DiagnosticsScreen} />
            <Stack.Screen name='Versions' component={VersionsScreen} />
            <Stack.Screen name='Files' component={FilesScreen} />
            <Stack.Screen name='FileEditor' component={FileEditorScreen} />
            <Stack.Screen name='Terminal' component={TerminalScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator