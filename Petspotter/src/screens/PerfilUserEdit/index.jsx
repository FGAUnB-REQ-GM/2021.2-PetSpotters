import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import styles from "./styles"

export function PerfilUserEdit() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const navigation = useNavigation()
  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <View style={{marginTop: "5%"}}>
        <Text style={styles.perfilText}>MEU PERFIL</Text>
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
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>TELEFONE</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={setTel}
            value={tel}
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