import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, Button } from 'react-native';

class Topic extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    render() {
        return (
            <View style={{flex:1, padding: 10}}>
                <Text>{this.props.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button title='Upvote' onPress={this._onPressButton} />
                    <Button title='Downvote' onPress={this._onPressButton} />
                </View>
            </View>
        );
    }
}

export default class Topics extends Component {
    render() {
        return ( 
            <View style={{flex:1}}>
                <Topic title='Welcome to my life.' />
                <Topic title='Simple Plan.' />
                <Topic title='Linkin Park.' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red'
    }
});