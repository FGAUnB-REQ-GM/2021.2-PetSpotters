import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ContainerView, SttsBar } from "../../components"
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";


export function PetData() {
  const navigation = useNavigation()
  const routes = useRoute()
  const data = routes.params

  return (
    <ContainerView>
      <SttsBar />
      <ScrollView>
        
      </ScrollView>
    </ContainerView>
  )
}