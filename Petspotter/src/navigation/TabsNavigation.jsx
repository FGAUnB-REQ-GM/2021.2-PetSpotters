import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Match, PerfilPet, SelectPerfil, SignIn } from "../screens";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfis" component={SelectPerfil} />
      <Tab.Screen name="Match" component={Match} />
    </Tab.Navigator>
  );
}
