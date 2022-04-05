import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ContainerView, SttsBar } from "../../components"
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";


export function PetData() {
  const navigation = useNavigation()
  const routes = useRoute()
  const data = routes.params

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <ContainerView>
      <SttsBar />
      <ScrollView>
        <Text>{data.nome}</Text>
        <Text>{data.raca}</Text>
        <Text>{data.idade}</Text>
        <Text>{data.porte}</Text>
        <Text>{data.genero}</Text>
        <Text>{data.bio}</Text>
      </ScrollView>
    </ContainerView>
  )
}