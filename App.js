import React, {Component} from 'react';
import { Platform, StyleSheet, Image, View, } from 'react-native';

export default class App extends Component {
    /*
    resizeMode
    -cover
    -contain
    -stretch
    -repeat
    -center
     */
    render(){
        return (
            <View style={styles.container}>
            <Image resizeMode={'stretch'}
                style={{width:'100%', height:180, borderWidth:2, borderColor:'red'}}
                       source={{uri:'http://via.placeholder.com/500X200'}} />
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
