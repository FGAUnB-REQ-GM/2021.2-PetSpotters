import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Button,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Match/styles";

const MatchScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { logged, userSwiped } = params;
  console.log({ logged, userSwiped });
  const telefone = "55".concat(userSwiped.telefone);
  return (
    <View
      style={{
        backgroundColor: "#B66C6C",
        opacity: 0.89,
        marginTop: "20%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={[styles.avaliatebtn]}
        activeOpacity={0.4}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="cross" size={28} color="white" />
      </TouchableOpacity>

      <Text style={{ fontSize: 30 }}>It's a match!</Text>

      <View
        style={{
          flexDirection: "row",
          height: "30%",
        }}
      >
        <Image
          source={{ uri: logged.pic }}
          style={{
            width: "40%",
            height: "80%",
            borderRadius: 20,
          }}
        />
        <Image
          source={{ uri: userSwiped.pic }}
          style={{
            width: "40%",
            height: "80%",
            borderRadius: 20,
          }}
        />
      </View>
      <Button
        title="Mande uma mensagem!"
        onPress={() => Linking.openURL(`https://wa.me/${telefone}`)}
      />
    </View>
  );
};

export default MatchScreen;
