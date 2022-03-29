import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SelectPerfil } from "../screens";
import { SignUp } from "../screens/SignUp";
import { Initial } from "../screens/Initial";
import { SignUpPet } from "../screens/SignUpPet";

const Stack = createNativeStackNavigator();

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={Initial} />
        <Stack.Screen name="Perfis" component={SelectPerfil} />
        <Stack.Screen name="Cadastro" component={SignUp} />
        <Stack.Screen name="CadastroPet" component={SignUpPet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
