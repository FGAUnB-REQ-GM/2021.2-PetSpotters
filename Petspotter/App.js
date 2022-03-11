import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import './assets/img/eu.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Dale</Text>
      <Text>Salve Herick Bala</Text>
      <Image source={require('./assets/img/eu.jpg')} />
      <StatusBar style="auto" />
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
