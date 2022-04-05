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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";

export function SignUp({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const navigator = useNavigation()

  LogBox.ignoreLogs(["Setting a timer"]);

  const OnSubmit = (data) => {
    try {
      createUserWithEmailAndPassword(auth, data.EMAIL, data.SENHA)
        .then(() => {
          navigation.navigate("CadastroPet", { data: data });
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

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
        <InputCadastro title="NOME" control={control} errors={errors} />
        <InputCadastro title="EMAIL" control={control} errors={errors} />
        <InputCadastro title="TELEFONE" control={control} errors={errors} />
        <InputCadastro title="SENHA" control={control} errors={errors} />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(OnSubmit)}
        >
          <Text style={styles.text}>PRÓXIMO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigator.navigate("Login")}
        >
          <Text style={styles.text}>JÁ POSSUI CONTA?</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
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
