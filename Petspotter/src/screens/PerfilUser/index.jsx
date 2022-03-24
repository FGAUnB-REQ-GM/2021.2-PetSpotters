import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import styles from "./styles"

export function PerfilUser() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <View style={{marginTop: "15%"}}>
        <Text style={styles.perfilText}>MEU PERFIL</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>NOME</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>EMAIL</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>TELEFONE</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={setTel}
          />
        </View>
      </View>
    </ContainerView>
  );
}