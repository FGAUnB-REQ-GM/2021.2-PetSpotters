import { useNavigation } from "@react-navigation/native";
import {
  collection,
  doc as docs,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db, storage } from "../../../firebase";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import { useUserContext } from "../../context/ContextUser";
import styles from "./styles";

export function PerfilUserEdit() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const navigation = useNavigation();
  const { user, setUser } = useUserContext();
  console.log("-#####-", user);

  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, `${user?.user?.data.email}/`);
  useEffect(() => {
    listAll(imageListRef).then((list) => {
      list.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const onSubmit = () => {
    const q = query(
      collection(db, "users"),
      where("email", "==", user?.data.email)
    );
    const querySnapshot = async () => {
      await getDocs(q).then((res) =>
        res.forEach(async (doc) => {
          // console.log(doc.id, "=>", doc.data());
          nome &&
            (await updateDoc(docs(db, "users", doc.id), { nome: nome }).then(
              (res) => (user.data["nome"] = nome)
            ));
          tel &&
            (await updateDoc(docs(db, "users", doc.id), { telefone: tel }).then(
              (res) => (user.data["tel"] = tel)
            ));
        })
      );
    };
    querySnapshot();
  };

  return (
    <ContainerView>
      <SttsBar />
      <ProfileLogo />
      <View style={{ marginTop: "5%" }}>
        <Text style={styles.perfilText}>MEU PERFIL</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>NOME</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setNome}
            value={nome}
            placeholder={user.data.nome}
            defaultValue={user.data.nome}
          />
        </View>
        <View style={styles.inputBoxView}>
          <Text style={styles.inputBoxLabel}>TELEFONE</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setTel}
            value={tel}
            placeholder={user.data.telefone}
            defaultValue={user.data.telefone}
          />
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginTop: "20%" }}>
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "#B66C6C", fontWeight: "bold" }}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={onSubmit}>
          <Text style={{ color: "#B66C6C", fontWeight: "bold" }}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </ContainerView>
  );
}
