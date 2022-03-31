import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PerfilUserEdit, PerfilPetEdit, SelectPerfil, Teste, PerfilPet, PerfilUser} from "../screens"

const Stack = createNativeStackNavigator()

export const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Teste" component={Teste} /> */}
        <Stack.Screen name='Perfis' component={SelectPerfil} />
        <Stack.Screen name='PerfisUsuarioEdit' component={PerfilUserEdit} />
        <Stack.Screen name='PerfisPetEdit' component={PerfilPetEdit} />
        <Stack.Screen name='PerfilPet' component={PerfilPet} />
        <Stack.Screen name='PerfilUser' component={PerfilUser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}