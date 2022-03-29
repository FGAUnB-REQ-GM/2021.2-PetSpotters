import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, ImageBackground } from "react-native";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import styles from "./styles"

export function PerfilPet() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState(0)
  const navigation = useNavigation()
  const [petPics, setPetPics] = useState({uri: null})
  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <View style={{marginTop: "15%"}}>
        <Text style={styles.perfilText}>PERFIL DO PET</Text>
      </View>
      <TouchableOpacity onPress={() => {setPetPics({uri: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"})}}>
        <View style={styles.profPicView}>
          <ImageBackground
            source={petPics}
            style={{ width: 125, height: 125}}
            imageStyle={{borderRadius: 80}}
          >
            <View>

            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
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