import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button, TouchableHighlight, FlatList } from 'react-native';

const Topics = require('../Topics');

class AllTopicsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: this.props.navigation.state.params.topics.getAllTopics()
        };
    }

    handleUpvote(index, topics) {
        this.props.navigation.state.params.handleUpvote(index);

        this.setState({
            topics: topics.getAllTopics()
        });
    }

    handleDownvote(index, topics) {
        this.props.navigation.state.params.handleDownvote(index);

        this.setState({
            topics: topics.getAllTopics()
        });
    }

    render() {
        var topics = this.props.navigation.state.params.topics;

        return (
            <View>
                <Text style={styles.heading}>The Complete</Text>
                <Text style={styles.heading}>List</Text>
                <FlatList
                data={this.state.topics}
                extraData={this.state}
                renderItem={({item, index}) => (
                    <View style={styles.topicListItem}>
                        {this.addTopicBox(item, index)}
                        {this.addVoteButtons(item, index, topics)}
                    </View>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
        );
    }

    addTopicBox(item,index) {
        return (
            <View style={[styles.topicWrapper]}>
                <Text style={styles.topicTitle}>{item.title}</Text>
                <Text style={styles.topicAuthor}>written by {item.author}</Text>
            </View>
        );
    }

    addVoteButtons(item, index, topics) {
        return (
            <View style={[styles.voteWrapper]}>
                <View style={styles.vote}>
                    <Text style={styles.voteNumber}>{item.upvotes}</Text>
                    <TouchableHighlight style={styles.voteButton} onPress={() => this.handleUpvote(index, topics)} underlayColor='gray'>
                        <Text style={styles.voteText}>Upvote</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.vote}>
                    <Text style={styles.voteNumber}>{item.downvotes}</Text>
                    <TouchableHighlight style={styles.voteButton} onPress={() => this.handleDownvote(index, topics)} underlayColor='gray'>
                        <Text style={styles.voteText}>Downvote</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 15
    },
    heading: {
        fontSize: 44,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: 'crimson'
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

  module.exports = AllTopicsScreen;