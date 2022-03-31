import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";

export function NewPhotoView() {
  return (
  <View style={styles.container}>
    <Icon name="camera" size={45} color={"#fff"} style={styles.cameraIcon}></Icon>
    <View style={styles.plusIconView}>
      <Icon name="plus" size={20} color={"#B66C6C"} style={styles.plusIcon}></Icon>
    </View>
  </View>
  )
}