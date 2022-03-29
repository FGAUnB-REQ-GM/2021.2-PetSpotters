import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Button,
  LogBox,
  ScrollView,
  FlatList,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";
import { Picker } from "@react-native-picker/picker";
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

  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  const OnSubmit = (data) => {
    console.log(route.params.data);
    console.log(data);

    /* const docRef = async () => {
      await addDoc(collection(db, "users"), {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
      });
    };

    docRef(); */
  };

  /* const q = query(
    collection(db, "users"),
    where("email", "==", "copatriciagalvao@gmail.com")
  );
  const querySnapshot = async () => {
    await getDocs(q).then((res) =>
      res.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      })
    );
  };
  querySnapshot(); */

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
    <>
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
          title="especie"
          control={control}
          errors={errors}
          data={especie}
        />
        <InputCadastro title="raça" control={control} errors={errors} />
        <InputSelect
          title="genero"
          control={control}
          errors={errors}
          data={genero}
        />
        <InputSelect
          title="porte"
          control={control}
          errors={errors}
          data={porte}
        />

        <Button title="Submit" onPress={handleSubmit(OnSubmit)} type="submit" />
      </View>
    </>
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
    width: 300,
    height: 50,
    backgroundColor: "#FFD2CE",
    borderColor: "#B66C6C",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
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
