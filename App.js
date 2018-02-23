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

export default class ReadIt extends Component {
    render() {
        return ( 
            <View style={styles.container}>
                <View style={[styles.header, this.border('yellow')]}>
                   <Text>I am a list of topics </Text>
                </View>
                <View style={[styles.footer, this.border('blue')]}>
                    <View style={this.border('red')}>
                        <Text>See All</Text>
                    </View>
                    <View style={this.border('green')}>
                        <Text>Add new</Text>
                    </View>
                </View>
            </View>
        );
    }

    border(color) {
        return {
            borderColor: color,
            borderWidth: 4
        };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    header: {
        flex: 5
    }
});