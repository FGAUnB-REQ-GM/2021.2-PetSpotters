import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import './assets/img/eu.jpg'
import { SelectPerfil } from './src/screens/SelectPerfil';

export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
