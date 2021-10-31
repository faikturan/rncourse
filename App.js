import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card  from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      <Card text='Merhaba' backgroundColor='blue'/>
      <Card text='UcuncuBinyil'/>
      <Card text='React Native' backgroundColor='red' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B',
  },
});
