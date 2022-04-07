import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  LogBox,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";
import { ContainerView, ProfileLogo } from "../../components";
import ModalRecover from "../../components/Modal";
import { useScreenContext } from "../../context/ContextScreen";
import styles from "./styles";
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

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem("@user") 
    if(user) {
      console.log(user)
      navigation.replace("PerfilPet");
    }
  }

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
      <ProfileLogo style={{alignSelf: 'center'}} />
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