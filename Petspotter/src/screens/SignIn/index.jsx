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
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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

export function SignIn({ navigation }) {
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
    try {
      signInWithEmailAndPassword(auth, data.email, data.senha)
        .then(() => {
          navigation.navigate("Match", { data: data });
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }

    /* const docRef = async () => {
      await addDoc(collection(db, "users"), {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
      });
    };

    docRef(); */
  };

  const q = query(
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
  querySnapshot();

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
        <InputCadastro title="email" control={control} errors={errors} />
        <InputCadastro title="senha" control={control} errors={errors} />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(OnSubmit)}
        >
          <Text style={styles.text}>ENTRAR</Text>
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
