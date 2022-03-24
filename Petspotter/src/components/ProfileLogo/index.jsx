import React from "react";
import { View, Image } from 'react-native'
import styles from "./styles";

export function ProfileLogo() {
  return (
    <View style={styles.logo}>
        <Image source={require('../../../assets/img/petspooter_logo.png')} />
    </View>
  )
}