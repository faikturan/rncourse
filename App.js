import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.slideOne}></View>
        <View style={styles.slideTwo}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B',
  },
    slideOne: {
      backgroundColor: '#607D8B',
       flex:1
    },
    slideTwo: {
        backgroundColor: '#FF5722',
        flex:2
    },
});
