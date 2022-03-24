import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectPerfil } from "../screens"

const Stack = createNativeStackNavigator()

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Perfis' component={SelectPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigation