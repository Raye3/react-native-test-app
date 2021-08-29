import React from 'react';
import "react-native-gesture-handler";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './screens/loginScreen';
import AppTabs from './screens/AppTabs';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="AppTabs" options={{ headerShown: false }} component={AppTabs}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
