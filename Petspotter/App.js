import React from 'react';
import ScreenNavigation from './src/navigation/ScreenNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenNavigation />
    </SafeAreaProvider>
  );
}
