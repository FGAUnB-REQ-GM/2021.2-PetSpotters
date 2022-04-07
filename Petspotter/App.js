import React from 'react';
import {ScreenNavigation} from './src/navigation/ScreenNavigation';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenNavigation />
    </SafeAreaProvider>
  );
}
