import React, {Component} from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList  } from 'react-native';
import data from './src/data';


export default class App extends Component {
    renderContactItem = ({ item, index}) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    };

        render() {
            return (
                <SafeAreaView>
                    <FlatList
                        data={data} renderItem={this.renderContactItem}
                        keyExtractor={item => item._id}/>
                </SafeAreaView>
            );
        }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
