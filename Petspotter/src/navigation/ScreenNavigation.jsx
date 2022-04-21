import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PerfilUserEdit,
  PerfilPetEdit,
  SelectPerfil,
  Teste,
  PerfilPet,
  PerfilUser,
  Initial,
  SignIn,
  SignUp,
  SignUpPet,
  PetData,
} from "../screens";
import { Match } from "../screens/Match";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MyTabs from "./TabsNavigation";
import { useScreenContext } from "../context/ContextScreen";

const Stack = createNativeStackNavigator();

export const ScreenNavigation = () => {
  const { userLogged, setUserLogged } = useScreenContext();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Teste" component={Teste} /> */}
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Cadastro" component={SignUp} />
            <Stack.Screen name="Tabs" component={MyTabs} />
            <Stack.Screen name="Match" component={Match} />
            <Stack.Screen name="PerfilPet" component={PerfilPet} />
            <Stack.Screen name="Perfis" component={SelectPerfil} />
            <Stack.Screen name="PerfisUsuarioEdit" component={PerfilUserEdit} />
            <Stack.Screen name="PerfisPetEdit" component={PerfilPetEdit} />
            <Stack.Screen name="PerfilUser" component={PerfilUser} />
            <Stack.Screen name="Inicial" component={Initial} />
            <Stack.Screen name="PetData" component={PetData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
