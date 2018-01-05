import React,{Component} from 'react';
import {Button,TouchableOpacity,NativeModules,AppRegistry, StyleSheet, Image,Text, View,ScrollView,Dimensions} from 'react-native';
import MyCell from './commonmycell';
import Resolution from "./Resolution"
import axios from 'axios'
import MyStatistics from './MyStatistics'
import Customer from './MyCustomer'
import MyIntegral from './MyIntegral'
import MyEnlist from './MyEnlist'
import MyAchievement from './MyAchievement'
import MyQr from './MyQr'
import {
  StackNavigator,
} from 'react-navigation';

var RNModules = NativeModules.RTModule;

class ChatScreen extends React.Component {
  static navigationOptions = {
    headerBackTitle:null,
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
   Home: { screen: MyStatistics },
   Customer:{screen: Customer},
   MyIntegral:{screen:MyIntegral},
   MyEnlist:{screen:MyEnlist},
   MyAchievement:{screen:MyAchievement},
   MyQr:{screen:MyQr},
   Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => App);


