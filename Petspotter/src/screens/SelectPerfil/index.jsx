import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SttsBar, ContainerView, ProfileBtn, ProfileLogo } from "../../components";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export function SelectPerfil() {
  const navigation = useNavigation()

  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <View style={{marginTop: "5%"}}>
        <Text style={styles.perfilText}>MEUS PERFIS</Text>
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('PerfisUsuarioEdit')}}>
        <ProfileBtn textoExibido="Meu perfil">
          <Image source={require("../../../assets/img/eu.jpg")} style={styles.img} />
        </ProfileBtn>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('PerfisPetEdit')}}>
        <ProfileBtn textoExibido="Perfil do meu pet" >
          <Image source={require("../../../assets/img/dog.jpg")} style={styles.img} />
        </ProfileBtn>
      </TouchableOpacity>
    </ContainerView>
  )
} 