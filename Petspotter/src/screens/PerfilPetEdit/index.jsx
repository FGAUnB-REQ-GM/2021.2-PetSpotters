import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ImageBackground, ScrollView } from "react-native";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles"

export function PerfilPetEdit() {
  const navigation = useNavigation()
  const routes = useRoute()
  const data = routes.params
  const [nome, setNome] = useState("")
  const [bio, setBio] = useState("")
  const [petPics, setPetPics] = useState({uri: null})
  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <View style={{marginTop: "5%"}}>
        <Text style={styles.perfilText}>EDITAR PERFIL DO PET</Text>
      </View>
      <ScrollView style={{display: 'flex', alignContent: 'center', width: '100%', }}>
        <TouchableOpacity onPress={() => {console.log(data.images[0].image)}}>
          <View style={styles.profPicView}>
            <ImageBackground
              source={{uri: data.images[1].image}}
              style={{ width: 125, height: 125}}
              imageStyle={{borderRadius: 80}}
            >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="camera" size={35} color={"#fff"} style={styles.cameraIcon}></Icon>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <View style={styles.form}>
          <View style={styles.inputBoxView}>
            <Text style={styles.inputBoxLabel}>NOME</Text>
            <TextInput 
              style={[styles.inputBox, {width: "100%"}]}
              onChangeText={setNome}
              value={nome}
              placeholder={data.data.NOME}
            />
          </View>
          <View style={styles.inputBoxView}>
            <Text style={styles.inputBoxLabel}>BIO</Text>
            <TextInput 
              style={[styles.inputBox, {height: 200, width: "100%"}]}
              onChangeText={setBio}
              value={bio}
              multiline={true}
              maxLength={300}
            />
          </View>
        </View>
        <View style={{display: "flex", flexDirection: "row", marginTop: "20%", width: "100%", justifyContent: 'center'}}>
          <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.goBack()}>
            <Text style={{color: "#B66C6C", fontWeight: "bold"}}>CANCELAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn} onPress={() => ToastAndroid.show("Edições salvas com sucesso", 2)}>
            <Text style={{color: "#B66C6C", fontWeight: "bold"}}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ContainerView>
  );
}