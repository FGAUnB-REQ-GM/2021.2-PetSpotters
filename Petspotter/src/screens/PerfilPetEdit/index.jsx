import { useNavigation } from "@react-navigation/native";
import {
  collection,
  doc as docs,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../firebase";
import { ContainerView, ProfileLogo, SttsBar } from "../../components";
import { useUserContext } from "../../context/ContextUser";
import styles from "./styles";

export function PerfilPetEdit() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [bio, setBio] = useState("");
  const [endereco, setEndereco] = useState("");
  const [idade, setIdade] = useState("");

  const { user, setUser } = useUserContext();

  const onSubmit = () => {
    const q = query(
      collection(db, "users"),
      where("email", "==", user?.user?.user.data.email)
    );
    const querySnapshot = async () => {
      await getDocs(q).then((res) =>
        res.forEach(async (doc) => {
          // console.log(doc.id, "=>", doc.data());
          nome &&
            (await updateDoc(docs(db, "users", doc.id), {
              Petnome: nome,
            }).then((res) => (user["Petnome"] = nome)));
          bio &&
            (await updateDoc(docs(db, "users", doc.id), {
              Petbio: bio,
            }).then((res) => (user["Petbio"] = bio)));
          endereco &&
            (await updateDoc(docs(db, "users", doc.id), {
              Petendereco: endereco,
            }).then((res) => (user["Petendereco"] = endereco)));
          dataN &&
            (await updateDoc(docs(db, "users", doc.id), {
              Petidade: idade,
            }).then((res) => (user["Petidade"] = idade)));
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
        <Text style={styles.perfilText}>EDITAR PERFIL DO PET</Text>
      </View>
      <ScrollView
        style={{ display: "flex", alignContent: "center", width: "100%" }}
      >
        <View style={styles.form}>
          <View style={styles.inputBoxView}>
            <Text style={styles.inputBoxLabel}>NOME</Text>
            <TextInput
              style={[styles.inputBox, { width: "100%" }]}
              onChangeText={setNome}
              value={nome}
              placeholder={user?.user.data.Petnome}
            />
          </View>
          <View style={styles.inputBoxView}>
            <Text style={styles.inputBoxLabel}>RAÇA</Text>
            <TextInput
              style={[styles.inputBox, { width: "100%" }]}
              onChangeText={setRaca}
              value={raca}
              placeholder={user?.user.data.Petraca}
            />
          </View>
          <View style={styles.inputBoxView}>
            <Text style={styles.inputBoxLabel}>BIO</Text>
            <TextInput
              style={[styles.inputBox, { height: 50, width: "100%" }]}
              onChangeText={setBio}
              value={bio}
              multiline={true}
              maxLength={300}
              placeholder={user?.user.data.Petbio}
            />
          </View>
          <View style={styles.inputBoxView}>
            <Text style={styles.inputBoxLabel}>ENDEREÇO</Text>
            <TextInput
              style={[styles.inputBox, { width: "100%" }]}
              onChangeText={setEndereco}
              value={endereco}
              multiline={true}
              maxLength={300}
              placeholder={user?.user.data.Petendereco}
            />
          </View>
          <View style={styles.inputBoxView}>
            <Text style={styles.inputBoxLabel}>IDADE</Text>
            <TextInput
              style={[styles.inputBox, { width: "100%" }]}
              onChangeText={setIdade}
              value={idade}
              multiline
              placeholder={user?.user.data.Petidade}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "5%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ color: "#B66C6C", fontWeight: "bold" }}>
              CANCELAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn} onPress={onSubmit}>
            <Text style={{ color: "#B66C6C", fontWeight: "bold" }}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ContainerView>
  );
}
