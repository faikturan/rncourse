import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.slideOne}>
            <Text>Merhaba!</Text>
        </View>
        <View style={styles.slideTwo}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={styles.box3}></View>
        </View>
    </View>
  );
}

//eğer flex-direction row verilirse birincil eksen yatay olur
//eğer flex-direction column verilirse birincil eksen dikey olur.

//justifyContent: Birincil eksende elemanların nasıl konumlanacağını belirler
/*
-flex-start
-flex-end
-space-between
-space-around
 */

//alignItems: İkincil eksende elemanların nasıl konumlanacağını belirler.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B',
  },
    slideOne: {
      backgroundColor: '#607D8B',
       flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideTwo: {
        backgroundColor: '#FF5722',
        flex:1,
        //flexDirection: 'row',//yatay
        justifyContent: 'space-between',
        flexDirection:'row',
        //alignItems: 'center'
        alignItems:'baseline'

    },
    box:{
      width:100,
        height:100
    },
    box1:{
      backgroundColor: '#795548'
    },
    box2:{
        backgroundColor: '#3F51B5'
    },
    box3:{
        backgroundColor: '#3F8145',
        width: 200,
        height: 200
    }
});
