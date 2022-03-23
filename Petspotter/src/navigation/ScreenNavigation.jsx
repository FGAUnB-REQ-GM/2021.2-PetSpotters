import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SelectPerfil
} from '../screens';

const Stack = createStackNavigator();

export function ScreenNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SelectPerfil" component={SelectPerfil} />
    </Stack.Navigator>
  );
}
