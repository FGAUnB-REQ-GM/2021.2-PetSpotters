import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./styles";

function ProfileBtn(props) {
  return (
    <TouchableOpacity style={styles.container}  >
      <View style={styles.insideView}>
          <Text style={styles.textoExibido}>{props.textoExibido}</Text>
          {props.children}
      </View>
    </TouchableOpacity>
  )
}

export default ProfileBtn