import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";

export function ContainerView(props) {
  return (
    <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
  )
} 