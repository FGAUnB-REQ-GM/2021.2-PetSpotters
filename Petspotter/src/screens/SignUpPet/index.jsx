import React from "react";
import {
  View,
  Text,
  LogBox,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
import { db, storage } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import InputCadastro from "../../components/InputCadastro";
import { ContainerView, ProfileBtn, ProfileLogo } from "../../components";
import { useScreenContext } from "../../context/ContextScreen";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { SelectPhoto } from "../../components/SelectPhoto";
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

  console.log("primeira tela", route.params.data);
  const OnSubmit = (data) => {
    console.log(data);
    const docRef = async () => {
      await addDoc(collection(db, "users"), {
        nome: route.params.data.NOME,
        email: route.params.data.EMAIL,
        telefone: route.params.data.TELEFONE,
        Petnome: data.NOME,
        Petidade: data.IDADE,
        Petendereco: data.ENDEREÇO,
        Petbio: data.BIO,
        Petraca: data.RAÇA,
      })
        .then(() => {
          setUserLogged(true);
          setUser({
            nome: route.params.data.NOME,
            email: route.params.data.EMAIL,
            telefone: route.params.data.TELEFONE,
            Petnome: data.NOME,
            Petidade: data.IDADE,
            Petendereco: data.ENDEREÇO,
            Petbio: data.BIO,
            Petraca: data.RAÇA,
          });
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
          
          <View style={{width: '100%', alignItems: 'center'}}>
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
