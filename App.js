import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight, FlatList } from 'react-native';

export default class ReadIt extends Component {
    constructor() {
        super();
        this.state = {
            topics: [
                {
                    title: 'How can we code better?',
                    author: 'Devin'
                },
                {
                    title: 'React is super cool',
                    author: 'Jackson'
                },
                {
                    title: 'This is a Reddit prototype',
                    author: 'James'
                },
                {
                    title: 'React Native - How to make a ListView?',
                    author: 'Joel'
                }
              ]
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
        return (
            <View style={styles.container}>
              <FlatList
                data={this.state.topics}
                renderItem={({item}) => (
                    <View style={styles.topicListItem}>
                        <View style={[styles.topicWrapper, this.border('red')]}>
                            <Text style={styles.topicTitle}>{item.title}</Text>
                            <Text style={styles.topicAuthor}>written by {item.author}</Text>
                        </View>
                        <View style={[styles.voteWrapper, this.border('purple')]}>
                            <View style={styles.vote}>
                                <Text style={styles.item}>Upvote</Text>
                            </View>
                            <View style={styles.vote}>
                                <Text style={styles.item}>Downvote</Text>
                            </View>
                        </View>
                    </View>
                )}
              />
            </View>
        );
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
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    button: {
        borderRadius: 100,
        borderWidth: 2,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'cornflowerblue'
    },
    topicListItem: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    },
    topicWrapper: {
        flex: 2
    },
    topicAuthor: {
        fontWeight: '300',
        color: 'gray',
        padding: 5,
        paddingLeft: 0
    },
    topicTitle: {
        fontSize: 20
    },
    voteWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vote: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});