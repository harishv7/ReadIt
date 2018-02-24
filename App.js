import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, Button, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = require('./Screens/HomeScreen');
const AddNewTopicScreen = require('./Screens/AddNewTopicScreen');

const RootStack = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    AddNewTopic: {
        screen: AddNewTopicScreen
    }
  }, {
      initialRouteName: 'Home'
  });

  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }