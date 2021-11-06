import React, {Component} from 'react';
import { Platform, StyleSheet, Image, View, } from 'react-native';

export default class App extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Image style={{width:'100%', height:180}}
                       source={require('./src/assets/sweden.jpeg')} />
            </View>
    );
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
      flexDirection: 'column',
    backgroundColor: '#FFEB3B',
      justifyContent:'center',
      alignItems: 'center'
  },
});
