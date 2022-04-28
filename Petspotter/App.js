import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProfileProvider } from "./src/context/ContextProfiles";
import { ScreenProvider } from "./src/context/ContextScreen";
import { UserProvider } from "./src/context/ContextUser";
import { ScreenNavigation } from "./src/navigation/ScreenNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenProvider>
        <UserProvider>
          <ProfileProvider>
            <ScreenNavigation />
          </ProfileProvider>
        </UserProvider>
      </ScreenProvider>
    </SafeAreaProvider>
  );
}
