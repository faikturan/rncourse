import React, {Component} from 'react';
import { StyleSheet, Image, View, Text,TextInput } from 'react-native';

export default class App extends Component {
    state = {
        name: ''
    };

    _onChangeText = text =>{
        this.setState({
            name: text,

        });
    };

    render(){
        const {name} = this.state;

        return (
            <View style={styles.container}>
         <Text>{name}</Text>
                <TextInput
                autoCapitalize='none'
                keyboardType='numeric'
                value={name}
                placeholder='Bir isim giriniz...'
                onChangeText={this._onChangeText}
                style={styles.myInput} />
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
      alignItems: 'center',
      paddingHorizontal: 10
  },
    myInput:{
      width:'100%',
        height:60,
        borderWidth:2,
        borderColor: 'gray'
    }
});
