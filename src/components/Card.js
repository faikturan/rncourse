import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types';

export default class Card extends Component {
    render() {
        const {text, backgroundColor} = this.props;
        return (
            <SafeAreaView>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardText}> Merhaba! </Text>
                    <View style={[styles.cardContainer, {backgroundColor}]}>
                        <Text style={styles.cardText}>{text} </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

Card.propTypes ={
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string
}

const styles = StyleSheet.create({
    cardContainer:{
        padding: 10,
        borderWidth: 2,
        borderColor: '#000'
    },
    cardText:{
        fontSize: 18
    }
})
