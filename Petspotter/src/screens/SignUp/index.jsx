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

export function SignUp({ navigation }) {
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
    createUserWithEmailAndPassword(auth, data.email, data.senha).then((res) => {
      console.log("criado");
      setUser(res.user.email);
    });
    navigation.navigate("CadastroPet", { data: data });
  };

  /*  const q = query(
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
        <InputCadastro title="nome" control={control} errors={errors} />
        <InputCadastro title="email" control={control} errors={errors} />
        <InputCadastro title="telefone" control={control} errors={errors} />
        <InputCadastro title="senha" control={control} errors={errors} />

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
});
