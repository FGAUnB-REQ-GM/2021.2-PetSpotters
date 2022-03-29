import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  Button,
} from "react-native";

export function Initial({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
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
        <View style={styles.button}>
          <Button
            title="cadastro"
            onPress={() => navigation.navigate("Cadastro")}
          />
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "15%",
    alignItems: "center",
  },
  container1: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    width: 300,
    height: 70,
    backgroundColor: "#FFD2CE",
    borderColor: "#B66C6C",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 26,
    color: "#B66C6C",
  },
});
