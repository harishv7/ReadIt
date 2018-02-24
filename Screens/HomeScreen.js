import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

// SORTED array of objects
var topics = [{
    title: 'How can we code better?',
    author: 'Devin',
    upvotes: 2,
    downvotes: 2
}];

class HomeScreen extends Component {
    constructor() {
        super();

        // get top 20
        var topTwentyTopics = [];
        var i = 0;

        if(topics.length < 20) {
            i = topics.length - 1;
        } else {
            i = 19;
        }
        
        while(i >= 0) {
            topTwentyTopics.push(topics[i--]);
        }

        this.state = {
            topics: topTwentyTopics
        };
    }

    // callback for new topic submitted
    onSubmit = data => {
        // process submitted topic
        console.log(data);
        const topic = data.topic.trim();
        const author = data.author.trim();
        var topics = this.state.topics;
        topics.push({
            author: author,
            title: topic,
            upvotes: 0,
            downvotes: 0
        });
        this.setState({
            topics: topics
        });
    };

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
                        onPress={() => this.props.navigation.navigate('AddNewTopic', { onSubmit: this.onSubmit })}>
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
        var allTopics = this.state.topics;
        allTopics[index].upvotes += 1;
    
        // bubble down the current topic to keep array sorted
        for(var i = allTopics.length - 1; i >= 1; i--) {
            if(allTopics[i].upvotes > allTopics[i-1].upvotes) {
                var temp = allTopics[i-1];
                allTopics[i-1] = allTopics[i];
                allTopics[i] = temp;
            }
        }

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