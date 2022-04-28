import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Image, LogBox, Text, TouchableOpacity, View } from "react-native";
import { storage } from "../../../firebase";
import {
  ContainerView,
  ProfileBtn,
  ProfileLogo,
  SttsBar,
} from "../../components";
import { useScreenContext } from "../../context/ContextScreen";
import { useUserContext } from "../../context/ContextUser";
import styles from "./styles";

export function SelectPerfil() {
  const navigation = useNavigation();
  LogBox.ignoreAllLogs();
  const { userLogged, setUserLogged } = useScreenContext();

  const { user, setUser } = useUserContext();
  console.log({ user });
  const [imageList, setImageList] = useState([]);
  const [imag, setImag] = useState(false);
  const imageListRef = ref(storage, `${user?.email}/`);

  LogBox.ignoreLogs(["Setting a timer"]);
  useEffect(() => {
    listAll(imageListRef).then((list) => {
      list.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
    setTimeout(() => {
      setImag(true);
    }, 1000);
  }, [imag]);

  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <View style={{ marginTop: "5%" }}>
        <Text style={styles.perfilText}>EDITAR PERFIS</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PerfisUsuarioEdit");
        }}
        activeOpacity={0.8}
        style={styles.userEditBtn}
      >
        <Text style={styles.userEditText}>Editar meu perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PerfilPet");
        }}
        activeOpacity={0.8}
      >
        <ProfileBtn textoExibido="Editar perfil do pet">
          {imag ? (
            <Image source={{ uri: user?.data.pic }} style={styles.img} />
          ) : (
            <Text>Carregando...</Text>
          )}
        </ProfileBtn>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={async () => {
          setImageList([]);
          setUserLogged(false);
          setUser({});
          await AsyncStorage.removeItem("@user");
          navigation.replace("Login");
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#f9f9f9" }}>SAIR</Text>
      </TouchableOpacity>
    </ContainerView>
  );
}
