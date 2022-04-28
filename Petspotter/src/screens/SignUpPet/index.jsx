import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { LogBox, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { db } from "../../../firebase";
import { ContainerView, ProfileBtn, ProfileLogo } from "../../components";
import InputCadastro from "../../components/InputCadastro";
import { SelectPhoto } from "../../components/SelectPhoto";
import { useScreenContext } from "../../context/ContextScreen";
import { useUserContext } from "../../context/ContextUser";
import styles from "./styles";

export function SignUpPet({ navigation, route }) {
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

  // console.log("primeira tela", route.params.data);
  const OnSubmit = (data) => {
    // console.log(data);
    const docRef = async () => {
      await addDoc(collection(db, "users"), {
        nome: route.params.data.NOME,
        email: route.params.data.EMAIL,
        telefone: route.params.data.TELEFONE,
        Petnome: data.NOME,
        PetdataN: data.IDADE,
        Petendereco: data.ENDEREÇO,
        Petbio: data.BIO,
        Petraca: data.RAÇA,
      })
        .then(() => {
          setUser({
            nome: route.params.data.NOME,
            email: route.params.data.EMAIL,
            telefone: route.params.data.TELEFONE,
            Petnome: data.NOME,
            PetdataN: data.IDADE,
            Petendereco: data.ENDEREÇO,
            Petbio: data.BIO,
            Petraca: data.RAÇA,
          });
          user && navigation.navigate("Login");
        })
        .catch((error) => {
          alert(error.message);
        });
    };

    docRef();
  };

  return (
    <ContainerView>
      <ProfileLogo />
      <View style={styles.container1}>
        <Text style={styles.text}>CADASTRE SEU PET</Text>
        <ScrollView
          style={{
            flex: 1,
            alignContent: "center",
            width: "100%",
          }}
        >
          <View>
            <ProfileBtn textoExibido="Foto do pet">
              <SelectPhoto email={route.params.data.EMAIL} nome="perfilPet" />
            </ProfileBtn>
          </View>

          <InputCadastro title="NOME" control={control} errors={errors} />
          <InputCadastro title="RAÇA" control={control} errors={errors} />
          <InputCadastro title="BIO" control={control} errors={errors} />
          <InputCadastro title="IDADE" control={control} errors={errors} />
          <InputCadastro title="ENDEREÇO" control={control} errors={errors} />

          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.button, { marginBottom: 150 }]}
              onPress={handleSubmit(OnSubmit)}
            >
              <Text style={styles.text}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ContainerView>
  );
}
