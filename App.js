import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card  from './src/components/Card';

export default class App extends Component {
    state = {
        name: 'Faik'
    };

    onChangeName = () =>{
        this.setState({
            name: 'Cem',
        });
    };
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text>{this.state.name}</Text>
                </View>
                <Button
                    title='Change the name'
                color='#000'
                  onPress={this.onChangeName}
            />
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
