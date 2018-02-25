import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = require('./Screens/HomeScreen');
const AddNewTopicScreen = require('./Screens/AddNewTopicScreen');
const AllTopicsScreen = require('./Screens/AllTopicsScreen');

const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    AddNewTopic: {
        screen: AddNewTopicScreen
    },
    AllTopics: {
        screen: AllTopicsScreen
    }
}, {
    initialRouteName: 'Home'
});

export default class App extends React.Component {
    render() {
        return <RootStack / > ;
    }
}