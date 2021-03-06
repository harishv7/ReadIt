/**
 * This is HomeScreen for the ReadIt app
 */
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

// instantiate a new object for managing topics
const Topics = require('../Topics');
var topics = new Topics();

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
         headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
            headerStyle:{
                backgroundColor:'white',
            },
        });

    constructor() {
        super();

        // get top 20 topics and set the state
        var topTwentyTopics =  topics.getTopTwentyTopics();

        this.state = {
            topics: topTwentyTopics
        };

        // bind this to upvote and downvote methods for use in AllTopicsScreen
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleUpvote =  this.handleUpvote.bind(this);
    }

    render() {
        return ( 
            <View style={styles.container}>
                <Text style={styles.heading}>The Top 20</Text>
                <View style={[styles.header]}>
                    {this.getTopicsContiner()}
                </View>
                {this.addFooter()}
            </View>
        );
    }

    // Auxillary function
    addFooter() {
        return (
            <View style={[styles.footer]}>
                <View>
                    <TouchableHighlight style={styles.button} 
                    underlayColor='gray'
                    onPress={() => this.props.navigation.navigate('AllTopics', { topics: topics, handleUpvote: this.handleUpvote, handleDownvote: this.handleDownvote })}>
                        <Text style={styles.navText}>See all</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight style={styles.button} 
                    underlayColor='gray'
                    onPress={() => this.props.navigation.navigate('AddNewTopic', { onSubmit: this.onSubmit })}>
                        <Text style={styles.navText}>Add new</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    // callback for new topic submitted from AddNewTopicScreen
    onSubmit = data => {
        // process submitted topic
        var topic;
        var author;

        if(data.topic == null) {
            topic = "null";
        } else if(data.author == null) {
            author = "null";
        } else {
            data.topic.trim();
            data.author.trim();
        }
        
        topics.addNewTopic(author, topic);

        this.setState({
            topics: topics.getTopTwentyTopics()
        });
    };
    
    // Auxillary function
    getTopicsContiner() {
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

    /**
     * Handler for when upvote button is pressed.
     * @param {number} index 
     */
    handleUpvote(index) {
        topics.addNewUpvote(index);

        this.setState({
            topics: topics.getTopTwentyTopics()
        });
    }

    /**
     * Handler when downvote button is pressed
     * @param {number} index 
     */
    handleDownvote(index) {
        topics.addNewDownvote(index);

        this.setState({
            topics: topics.getTopTwentyTopics()
        });
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
        flex: 8,
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
        fontSize: 18,
        color: 'cornflowerblue',
        fontWeight: '300'
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