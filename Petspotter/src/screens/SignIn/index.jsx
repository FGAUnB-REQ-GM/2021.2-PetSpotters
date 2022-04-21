import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  FlatList,
  LogBox,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import ModalRecover from "../../components/Modal";
import { useScreenContext } from "../../context/ContextScreen";
import styles from "./styles";
import { useUserContext } from "../../context/ContextUser";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function SignIn({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  LogBox.ignoreLogs(["Setting a timer"]);

  const [isLoaded, setIsLoaded] = useState(false)
  
  const { userLogged, setUserLogged } = useScreenContext();
  const { user, setUser } = useUserContext();
  // console.log({ user });

  LogBox.ignoreAllLogs()
  const checkLogin = async () => {
    const usuario = await AsyncStorage.getItem("@user") 
    if(usuario) {
      const userObj = JSON.parse(usuario)
      setUser(userObj);

      setTimeout(() => {
        navigation.replace("Perfis", {userObj});
        setUserLogged(true) 
        setIsLoaded(true)
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoaded(true)
      }, 1000);
    }
  }
  
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
              res.forEach(async (doc) => {
                console.log(doc.id, "=>", doc.data());
                setUser(doc.data());
                await AsyncStorage.setItem("@user", JSON.stringify(doc.data()))
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
  };

  // if(!isLoaded) {
  //   return (
  //     <View style={{flex: 1, justifyContent: "center"}}>
  //       <ActivityIndicator size="large" color="#B66C6C" />
  //     </View>
  //   )
  // }

  useEffect(() => {
    checkLogin()
  }, [])

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
      <SttsBar />
      {isLoaded ? (<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          top: "15%",
        }}
      />) : (
      <View style={{flex: 1, justifyContent: "center"}}>
        <ActivityIndicator size="large" color="#B66C6C" />
      </View>)}
      

    </ContainerView>
  );
}