import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
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
      <TouchableOpacity onPress={() => {}}>
        <ProfileBtn textoExibido="Meu perfil">
          <Image source={require("../../../assets/img/eu.jpg")} style={styles.img} />
        </ProfileBtn>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <ProfileBtn textoExibido="Perfil do meu pet" >
          <Image source={require("../../../assets/img/dog.jpg")} style={styles.img} />
        </ProfileBtn>
      </TouchableOpacity>
    </ContainerView>
  )
} 