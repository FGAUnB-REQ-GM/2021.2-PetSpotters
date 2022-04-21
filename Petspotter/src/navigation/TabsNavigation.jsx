import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Match, PerfilPet, SelectPerfil, SignIn } from "../screens";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    activeColor="#f9f9f9"
    inactiveColor="#111"
      barStyle={{backgroundColor: '#B66C6C', height: 40}} 
    >
      <Tab.Screen name=" " component={SelectPerfil} options={{tabBarIcon: () => (
          <Icon name="book-open" size={25} color={"#f9f9f9"} />
        )}} />
      <Tab.Screen name="  " component={PerfilPet} options={{tabBarIcon: () => (
          <Icon name="dog" size={25} color={"#f9f9f9"} />
        )}}/>
    </Tab.Navigator>
  );
}
