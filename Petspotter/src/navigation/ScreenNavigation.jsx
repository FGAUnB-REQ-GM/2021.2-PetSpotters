import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PerfilUserEdit, PerfilPetEdit, SelectPerfil, Teste} from "../screens"

const Stack = createNativeStackNavigator()

export const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Teste" component={Teste} /> */}
        <Stack.Screen name='Perfis' component={SelectPerfil} />
        <Stack.Screen name='PerfisUsuario' component={PerfilUserEdit} />
        <Stack.Screen name='PerfisPet' component={PerfilPetEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}