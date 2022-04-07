import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  LogBox,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
import { db, storage } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";
import InputSelect from "../../components/InputSelect";
import { ContainerView, ProfileBtn, ProfileLogo } from "../../components";
import { useScreenContext } from "../../context/ContextScreen";
import { Match } from "../Match";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { SelectPhoto } from "../../components/SelectPhoto";
import { useUserContext } from "../../context/ContextUser";

export function SignUpPet({ navigation, route }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  LogBox.ignoreLogs(["Setting a timer"]);

  const { userLogged, setUserLogged } = useScreenContext();
  const { user, setUser } = useUserContext();

  console.log("primeira tela", route.params.data);
  const OnSubmit = (data) => {
    console.log(data);
    const docRef = async () => {
      await addDoc(collection(db, "users"), {
        nome: route.params.data.NOME,
        email: route.params.data.EMAIL,
        telefone: route.params.data.TELEFONE,
        Petnome: data.NOME,
        PetdataN: data.NASCIMENTO,
        Petendereco: data.ENDEREÇO,
        Petbio: data.BIO,
        Petraca: data.RAÇA,
      })
        .then(() => {
          setUserLogged(true);
          setUser({
            nome: route.params.data.NOME,
            email: route.params.data.EMAIL,
            telefone: route.params.data.TELEFONE,
            Petnome: data.NOME,
            PetdataN: data.NASCIMENTO,
            Petendereco: data.ENDEREÇO,
            Petbio: data.BIO,
            Petraca: data.RAÇA,
          });
        })
        .catch((error) => {
          alert(error.message);
        });
    };

    docRef();
  };

  return (
    <ContainerView>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          // top: "15%",
        }}
      /> */}
      <ProfileLogo />
      <View style={styles.container1}>
        <Text style={styles.text}>CADASTRE SEU PET</Text>
        <ScrollView
          style={{
            flex: 1,
            alignContent: "center",
            width: "100%",
          }}
        >
          <View>
            <ProfileBtn textoExibido="Foto do pet">
              <SelectPhoto email={route.params.data.EMAIL} nome="perfilPet" />
            </ProfileBtn>
          </View>

          <InputCadastro title="NOME" control={control} errors={errors} />
          <InputCadastro title="RAÇA" control={control} errors={errors} />
          <InputCadastro title="BIO" control={control} errors={errors} />
          <InputCadastro title="NASCIMENTO" control={control} errors={errors} />
          <InputCadastro title="ENDEREÇO" control={control} errors={errors} />
          
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              style={[styles.button, { marginBottom: 150 }]}
              onPress={handleSubmit(OnSubmit)}
            >
              <Text style={styles.text}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  container1: {
    marginTop: "10%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#FFD2CE",
    borderColor: "#B66C6C",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    color: "#B66C6C",
  },
  img: {
    resizeMode: "cover",
    position: "absolute",
    borderRadius: 30,
    borderColor: "#000",
    width: 200,
    height: 150,
  },
});
