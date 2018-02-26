/**
 * This screen allows the user to add a new topic.
 */
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Modal, Button, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';

class AddNewTopicScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            topic: null,
            author: null
        }
    }

    /**
     * Navigates back to HomeScreen, passing the topic and author to the callback.
     * @param {string} topic 
     * @param {string} author 
     */
    goBack(topic, author) {    
        this.props.navigation.goBack();
        this.props.navigation.state.params.onSubmit({ topic: this.state.topic, author: this.state.author });
    }

    render() {
      return (
        <KeyboardAvoidingView
            style={styles.keyboardAvoidingViewContainer}
            behavior="height"
        >
            <Text style={styles.heading}>Something you want to share?</Text>
            
            {this.addTextInputBoxes()}
            
            <View style={styles.buttons}>
                <Button
                style={styles.submitButton}
                onPress={() => this.goBack()}
                title="Submit"
                color="blue"
                accessibilityLabel="Submit this topic"
                />
            </View>
        </KeyboardAvoidingView>
      );
    }

    // Auxillary function
    addTextInputBoxes() {
        return (
            <View style={{flex:1}}>
                <ScrollView 
                scrollEnabled={false}
                style={styles.scrollView}
                >   
                    <TextInput
                        style={styles.topicInput}
                        placeholder="Your awesome topic goes here..."
                        onChangeText={(text) => this.setState({topic: text})}
                        multiline={true}
                        maxLength={255}
                    /> 
                </ScrollView> 
                <ScrollView 
                scrollEnabled={false}
                style={styles.scrollView}
                >  
                    <TextInput
                        style={styles.nameInput}
                        placeholder="Your cool name..."
                        multiline={true}
                        maxLength={70}
                        onChangeText={(text) => this.setState({author: text})}
                    />
                </ScrollView>
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
    keyboardAvoidingViewContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-end'
    },
    scrollView: {
        flex: 1
    },
    heading: {
        fontSize: 44,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: 'cornflowerblue'
    },
    topicPrompt: {
        fontSize: 24,
        fontWeight: '300',
        margin: 10
    },
    topicInput: {
        margin: 10,
        borderColor: 'gray', 
        borderWidth: 2, 
        fontSize: 24,
        height: 100
    },
    nameInput: {
        margin: 10,
        borderColor: 'gray', 
        borderWidth: 2, 
        fontSize: 24,
        height: 50
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    submitButton: {
        flex: 1
    }
  });

  module.exports = AddNewTopicScreen;