import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

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
    constructor() {
        super();
        this.state = {
            topics: ['Hello World', 'Issac Newton', 'Einstein', 'Nikola Tesla']
        };
    }

    render() {
        return ( 
            <View style={styles.container}>
                <View style={[styles.header, this.border('yellow')]}>
                   {this.getTopics()}
                </View>
                <View style={[styles.footer, this.border('blue')]}>
                    <View>
                        <TouchableHighlight style={styles.button} onPress={this.buttonPressed} underlayColor='gray'>
                            <Text>See all</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight style={styles.button} onPress={this.buttonPressed} underlayColor='gray'>
                            <Text>Add new</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }

    getTopics() {
        return this.state.topics.map((topic, index) => {
            return <View key={index}>
                <Text>
                    {index + 1}. {topic}
                </Text>
            </View>
        });
    }

    buttonPressed() {
        console.log("Button pressed");
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
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 100,
        borderWidth: 2,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'cornflowerblue'
      }
});