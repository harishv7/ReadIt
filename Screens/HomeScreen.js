import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
    constructor() {
        super();

        this.state = {
            topics: [
                {
                    title: 'How can we code better?',
                    author: 'Devin',
                    upvotes: 12,
                    downvotes: 2
                },
                {
                    title: 'React is super cool',
                    author: 'Jackson',
                    upvotes: 12,
                    downvotes: 2
                },
                {

                    title: 'This is a Reddit prototype',
                    author: 'James',
                    upvotes: 12,
                    downvotes: 2
                },
                {
                    title: 'React Native - How to make a ListView?',
                    author: 'Joel',
                    upvotes: 12,
                    downvotes: 2
                },
                {
                    title: 'Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the box and type.',
                    author: 'Harish V',
                    upvotes: 10000,
                    downvotes: 100
                }
              ]
        };
    }

    render() {
        return ( 
            <View style={styles.container}>
                <Text style={styles.heading}>The Top 20</Text>
                <View style={[styles.header]}>
                    {this.getTopics()}
                </View>
                <View style={[styles.footer]}>
                    <View>
                        <TouchableHighlight style={styles.button} 
                        underlayColor='gray'
                        onPress={() => this.props.navigation.navigate('AddNewTopic')}>
                            <Text style={styles.navText}>See all</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight style={styles.button} 
                        underlayColor='gray'
                        onPress={() => this.props.navigation.navigate('AddNewTopic')}>
                            <Text style={styles.navText}>Add new</Text>
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
                extraData={this.state}
                renderItem={({item, index}) => (
                    <View style={styles.topicListItem}>
                        <View style={[styles.topicWrapper]}>
                            <Text style={styles.topicTitle}>{item.title}</Text>
                            <Text style={styles.topicAuthor}>written by {item.author}</Text>
                        </View>
                        <View style={[styles.voteWrapper]}>
                            <View style={styles.vote}>
                                <Text style={styles.voteNumber}>{item.upvotes}</Text>
                                <TouchableHighlight style={styles.voteButton} onPress={() => this.handleUpvote(index)} underlayColor='gray'>
                                    <Text style={styles.voteText}>Upvote</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.vote}>
                                <Text style={styles.voteNumber}>{item.downvotes}</Text>
                                <TouchableHighlight style={styles.voteButton} onPress={() => this.handleDownvote(index)} underlayColor='gray'>
                                    <Text style={styles.voteText}>Downvote</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
        );
    }

    handleUpvote(index) {
        allTopics = this.state.topics;
        allTopics[index].upvotes += 1;

        this.setState({
            topics: allTopics
        });
    }

    handleDownvote(index) {
        allTopics = this.state.topics;
        allTopics[index].downvotes -= 1;

        this.setState({
            topics: allTopics
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
        alignItems: 'stretch',
        paddingTop: 15
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 10,
        backgroundColor: '#f8f8ff'
    },
    header: {
        flex: 7,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    heading: {
        fontSize: 60,
        fontWeight: '800',
        color: '#3300CC'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 70
    },
    navText: {
        fontSize: 16,
        color: 'cornflowerblue'
    },
    topicListItem: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        paddingLeft: 5,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10
    },
    topicWrapper: {
        flex: 3,
        justifyContent: 'center'
    },
    topicAuthor: {
        fontWeight: '300',
        color: 'gray',
        padding: 5,
        paddingLeft: 0
    },
    topicTitle: {
        fontSize: 18,
        fontWeight: '300'
    },
    voteWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    vote: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    voteNumber: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    voteText: {
        fontSize: 16,
        color: 'blue',
        fontWeight: '300'
    },
    voteButton: {
        flex: 1
    }
});

module.exports = HomeScreen;