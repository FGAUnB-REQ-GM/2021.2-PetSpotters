import React from "react";
import { View, Image, Text } from "react-native";
import SttsBar from "../../components/SttsBar";
import { ContainerView } from "../../components/ContainerView";
import styles from "./styles";
import ProfileBtn from "../../components/ProfileBtn";

export function SelectPerfil() {
  return (
    <ContainerView>
      <SttsBar />
      <View style={styles.logo}>
        <Image source={require('../../../assets/img/petspooter_logo.png')} />
      </View>
      <View style={{marginTop: "15%"}}>
        <Text style={styles.perfilText}>MEUS PERFIS</Text>
      </View>
      <ProfileBtn textoExibido="Meu perfil">
      </ProfileBtn>
      <ProfileBtn textoExibido="Perfil do meu pet"/>
    </ContainerView>
  )
} 