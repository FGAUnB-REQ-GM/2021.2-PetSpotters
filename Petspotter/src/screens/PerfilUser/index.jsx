import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import styles from "./styles"

export function PerfilUser() {
  const [text, setText] = useState("")
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
            onChangeText={setText}
          />
        </View>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>EMAIL</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={setText}
          />
        </View>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>TELEFONE</Text>
          <TextInput 
            style={styles.inputBox}
            onChangeText={setText}
          />
        </View>
      </View>
    </ContainerView>
  );
}