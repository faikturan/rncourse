import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card  from './src/components/Card';

export default class App extends Component {
    onPressDetail = () =>{
        alert('Detail');
    };
    render(){
        return (
            <View style={styles.container}>
                <Card text='Merhaba' backgroundColor='blue'/>
                <Card text='UcuncuBinyil'/>
                <Card text='React Native' backgroundColor='red' />
                <Button
                    title='Detail'
                color='#000'
                  onPress={this.onPressDetail}
            />
    </View>
    );
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B',
  },
});
