import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {
  SttsBar,
  ContainerView,
  ProfileBtn,
  ProfileLogo,
} from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { useUserContext } from "../../context/ContextUser";
import { useScreenContext } from "../../context/ContextScreen";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../../firebase";

export function SelectPerfil() {
  const navigation = useNavigation();
  const routes = useRoute();
  const data = routes.params;

  const { userLogged, setUserLogged } = useScreenContext();

  const { user, setUser } = useUserContext();
  console.log(user);

  const [imageList, setImageList] = useState([]);
  const [imag, setImag] = useState(false);
  const imageListRef = ref(storage, `${user.email}/`);

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
    }, 2000);
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
        <Text
          style={styles.userEditText}
        >
          Editar meu perfil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PerfisPetEdit", data);
        }}
        activeOpacity={0.8}
      >
        <ProfileBtn textoExibido="Editar perfil do pet">
          {imag ? (
            <Image source={{ uri: imageList[0] }} style={styles.img} />
          ) : (
            <Text>Loading...</Text>
          )}
        </ProfileBtn>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={() => {
          setImageList([]);
          setUser({});
          setUserLogged(false);
        }}
      >
        <Text style={{ fontWeight: "bold", color: '#f9f9f9' }}>SAIR</Text>
      </TouchableOpacity>
    </ContainerView>
  );
}
