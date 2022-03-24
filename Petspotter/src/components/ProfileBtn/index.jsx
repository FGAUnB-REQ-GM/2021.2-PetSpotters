import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export function ProfileBtn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.insideView}>
        {props.children}
      </View>
        <Text style={styles.textoExibido}>{props.textoExibido}</Text>
    </View>
  )
}