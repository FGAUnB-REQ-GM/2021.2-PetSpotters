import React from "react";
import { ScreenNavigation } from "./src/navigation/ScreenNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { PerfilPet } from "./src/screens";
import { ScreenProvider } from "./src/context/ContextScreen";
import { UserProvider } from "./src/context/ContextUser";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenProvider>
        <UserProvider>
          <ScreenNavigation />
        </UserProvider>
      </ScreenProvider>
    </SafeAreaProvider>
  );
}
