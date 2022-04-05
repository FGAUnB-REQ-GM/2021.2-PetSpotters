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
        <Text style={styles.perfilText}>EDITAR PERFIS</Text>
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('PerfisUsuarioEdit')}} activeOpacity={0.8}>
        <ProfileBtn textoExibido="Editar meu perfil">
          <Image source={require("../../../assets/img/eu.jpg")} style={styles.img} />
        </ProfileBtn>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('PerfisPetEdit')}} activeOpacity={0.8}>
        <ProfileBtn textoExibido="Editar perfil do pet" >
          <Image source={require("../../../assets/img/dog.jpg")} style={styles.img} />
        </ProfileBtn>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Text style={{fontWeight: 'bold'}}>VOLTAR</Text>
      </TouchableOpacity>
    </ContainerView>
  )
} 
