import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FlatList,
  Image,
  LogBox,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../../firebase";
import InputCadastro from "../../components/InputCadastro";
import styles from "./styles";

export function SignUp({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  LogBox.ignoreLogs(["Setting a timer"]);

  const [loading, setLoading] = useState(false);

  const OnSubmit = (data) => {
    try {
      setLoading(true);
      createUserWithEmailAndPassword(auth, data.EMAIL, data.SENHA)
        .then(() => {
          setLoading(false);
          navigation.navigate("CadastroPet", { data: data });
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const renderItem = () => (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/img/petspooter_logo.png")}
          style={{
            width: "90%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.container1}>
        <InputCadastro title="NOME" control={control} errors={errors} />
        <InputCadastro title="EMAIL" control={control} errors={errors} />
        <InputCadastro title="TELEFONE" control={control} errors={errors} />
        <InputCadastro title="SENHA" control={control} errors={errors} />

        {loading ? (
          <View style={styles.horizontal}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(OnSubmit)}
          >
            <Text style={styles.text}>PRÓXIMO</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text}>JÁ POSSUI CONTA?</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          top: "15%",
        }}
      />
    </SafeAreaView>
  );
}
