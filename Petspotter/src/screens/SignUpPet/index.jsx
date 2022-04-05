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
} from "react-native";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";
import InputSelect from "../../components/InputSelect";

export function SignUpPet({ navigation, route }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  LogBox.ignoreLogs(["Setting a timer"]);

  const OnSubmit = (data) => {
    navigation.navigate("PerfilPet", { data: data });

    const docRef = async () => {
      await addDoc(collection(db, "users"), {
        nome: route.params.data.NOME,
        email: route.params.data.EMAIL,
        telefone: route.params.data.TELEFONE,
        pet: {
          raca: data.RACA,
          especie: data.ESPECIE,
          genero: data.GENERO,
          porte: data.PORTE,
        },
      });
    };

    docRef();
  };

  let data = [];
  const especie = [
    { label: "", value: "" },
    { label: "Cachorro", value: "cachorro" },
    { label: "Gato", value: "gato" },
  ];

  const genero = [
    { label: "", value: "" },
    { label: "Macho", value: "macho" },
    { label: "Fêmea", value: "femea" },
  ];

  const porte = [
    { label: "", value: "" },
    { label: "Pequeno", value: "pequeno" },
    { label: "Médio", value: "medio" },
    { label: "Grande", value: "grande" },
  ];

  const renderItem = () => (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../assets/img/petspooter_logo.png")}
          style={{
            width: "90%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.text}>CADASTRE SEU PET</Text>

        <InputSelect
          title="ESPECIE"
          control={control}
          errors={errors}
          data={especie}
        />
        <InputCadastro title="RACA" control={control} errors={errors} />
        <InputSelect
          title="GENERO"
          control={control}
          errors={errors}
          data={genero}
        />
        <InputSelect
          title="PORTE"
          control={control}
          errors={errors}
          data={porte}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(OnSubmit)}
        >
          <Text style={styles.text}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          top: "15%",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  container1: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 500,
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
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 26,
    color: "#B66C6C",
  },
});
