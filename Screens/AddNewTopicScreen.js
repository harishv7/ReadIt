import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';

class AddNewTopicScreen extends React.Component {
    render() {
      return (
        <View>
            <Text style={styles.heading}>Something you want to share?</Text>
            <View>
                <Text style={styles.topicPrompt}>Add it here</Text>
                <TextInput
                    style={styles.topicInput}
                    multiline={true}
                    maxLength={255}
                />
            </View>
            <View>
                <Text style={styles.topicPrompt}>What's your cool name?</Text>
                <TextInput
                    style={styles.nameInput}
                    multiline={true}
                    maxLength={70}
                />
            </View>
            <View style={styles.buttons}>
                <Button
                style={styles.submitButton}
                onPress={this.submitButtonPressed()}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Submit this topic"
                />
            </View>
        </View>
      );
    }

    submitButtonPressed() {
        console.log('Submit button');
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
        height: 70
    },
    nameInput: {
        margin: 10,
        borderColor: 'gray', 
        borderWidth: 2, 
        fontSize: 24,
        height: 30
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