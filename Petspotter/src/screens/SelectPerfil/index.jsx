import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import styles from "./styles";

export function SelectPerfil() {
  return (
    <SafeAreaView>
      <View style={styles.logo}>
        <Image source={require("../../../assets/img/petspooter_logo.png")} />
      </View>
    </SafeAreaView>
  );
}
