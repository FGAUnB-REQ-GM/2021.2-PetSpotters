import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useScreenContext } from "../context/ContextScreen";
import {
  Initial,
  PerfilPet,
  PerfilPetEdit,
  PerfilUser,
  PerfilUserEdit,
  PetData,
  SelectPerfil,
  SignIn,
  SignUp,
  SignUpPet,
} from "../screens";
import { Match } from "../screens/Match";
import MatchScreen from "../screens/MatchScreen";
import MyTabs from "./TabsNavigation";

const Stack = createNativeStackNavigator();

export const ScreenNavigation = () => {
  const { userLogged, setUserLogged } = useScreenContext();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Teste" component={Teste} /> */}
        {userLogged ? (
          <>
            <Stack.Screen name="Tabs" component={MyTabs} />
            <Stack.Screen name="Match" component={Match} />
            <Stack.Screen name="PerfilPet" component={PerfilPet} />
            <Stack.Screen name="Perfis" component={SelectPerfil} />
            <Stack.Screen name="PerfisUsuarioEdit" component={PerfilUserEdit} />
            <Stack.Screen name="PerfisPetEdit" component={PerfilPetEdit} />
            <Stack.Screen name="PerfilUser" component={PerfilUser} />
            <Stack.Screen name="Inicial" component={Initial} />
            <Stack.Screen name="PetData" component={PetData} />
            <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
              <Stack.Screen name="MatchScreen" component={MatchScreen} />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Cadastro" component={SignUp} />
            <Stack.Screen name="CadastroPet" component={SignUpPet} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
