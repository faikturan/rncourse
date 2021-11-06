import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card  from './src/components/Card';

export default class App extends Component {
    state = {
        number: 0
    };

    onPressIncrease = () =>{
        this.setState({
            number: ++this.state.number,
        });
    };

    onPressDecrease = () =>{
        this.setState({
            number: --this.state.number,
        });
    };
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.number}>{this.state.number}</Text>
                </View>
                <View style = {styles.buttons}>
                <Button
                    title='Artır'
                color='#000'
                  onPress={this.onPressIncrease}
            />
                <Button
                    title='Azalt'
                    color='#000'
                    onPress={this.onPressDecrease}
                />
                </View>
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
    buttons:{
      flexDirection: 'row'
    },
    number:{
      fontSize: 44
    }
});
