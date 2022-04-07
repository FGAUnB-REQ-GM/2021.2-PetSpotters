import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { useForm, Controller } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";
import { ContainerView, ProfileLogo } from "../../components";
import ModalRecover from "../../components/Modal";
import { useScreenContext } from "../../context/ContextScreen";
import { useUserContext } from "../../context/ContextUser";

export function SignIn({ navigation }) {
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
  console.log({ user });

  const OnSubmit = (data) => {
    try {
      signInWithEmailAndPassword(auth, data.EMAIL, data.SENHA)
        .then(() => {
          setUserLogged(true);

          const q = query(
            collection(db, "users"),
            where("email", "==", data.EMAIL)
          );
          console.log(data.EMAIL);
          const querySnapshot = async () => {
            await getDocs(q).then((res) =>
              res.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
                setUser(doc.data());
              })
            );
          };
          querySnapshot();
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

  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = () => (
    <>
      <ProfileLogo />
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
        <TouchableOpacity
          style={{ top: "3%" }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.text}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <ModalRecover
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
  ];
  return (
    <ContainerView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          top: "15%",
        }}
      />
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
