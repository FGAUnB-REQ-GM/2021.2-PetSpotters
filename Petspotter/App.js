import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SelectPerfil } from './src/screens/SelectPerfil';

export default function App() {
  return (
    <View style={styles.container}>
      <SelectPerfil />
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
