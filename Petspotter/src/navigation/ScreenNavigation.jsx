import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PerfilUser, PerfilPet, SelectPerfil} from "../screens"

const Stack = createNativeStackNavigator()

export const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Perfis' component={SelectPerfil} />
        <Stack.Screen name='PerfisUsuario' component={PerfilUser} />
        <Stack.Screen name='PerfisPet' component={PerfilPet} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}