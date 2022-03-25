import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import styles from "./styles"

export function PerfilPet() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState(0)
  const navigation = useNavigation()
  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <View style={{marginTop: "15%"}}>
        <Text style={styles.perfilText}>PERFIL DO PET</Text>
      </View>
      <View style={styles.profPicView}>
        <Image source={require("../../../assets/img/eu.jpg")} style={{resizeMode: "center", borderRadius: 100}} />
      </View>
      <View style={styles.form}>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>NOME</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={setNome}
            value={nome}
          />
        </View>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>EMAIL</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={setIdade}
            value={idade}
          />
        </View>
      </View>
      <View style={{display: "flex", flexDirection: "row", marginTop: "20%"}}>
        <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.goBack()}>
          <Text style={{color: "#B66C6C", fontWeight: "bold"}}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={() => ToastAndroid.show("Edições salvas com sucesso", 2)}>
          <Text style={{color: "#B66C6C", fontWeight: "bold"}}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </ContainerView>
  );
}