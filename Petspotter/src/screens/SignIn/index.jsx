import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { ContainerView, ProfileLogo, SttsBar } from "../../components";

export function SignIn({ navigation }) {
  const [user, setUser] = useState({})
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  LogBox.ignoreLogs(["Setting a timer"]);

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem("@user") 
    if(user) {
      // console.log(user)
      navigation.replace("PerfilPet");
    }
  }

  

  const OnSubmit = (data) => {
    try {
      signInWithEmailAndPassword(auth, data.EMAIL, data.SENHA)
        .then(async () => {
          
          navigation.replace("PerfilPet", user);
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
    where("email", "==", "herick.lima77@gmail.com")
  );
  const querySnapshot = async () => {
    await getDocs(q).then((res) =>
      res.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data());
        setUser(doc.data())
      })
    );
  };

  useEffect(() => {
    querySnapshot();
    checkLogin()
  }, [])

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
  ];
  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <Text style={styles.loginText}>LOGIN</Text>
      <View style={styles.container1}>
        <InputCadastro title="EMAIL" control={control} errors={errors} />
        <InputCadastro title="SENHA" control={control} errors={errors} />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(OnSubmit)}
        >
          <Text style={styles.text}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.text}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  container1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: '15%'
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
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -0.2, height: 0.2},
    textShadowRadius: 2
  },
  loginText: {
    marginTop: '20%',
    fontSize: 30,
    color: "#B66C6C",
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 6
  }
});
