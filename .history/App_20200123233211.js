import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const MainNavigator= createStackNavigator({
  Login:{
    screen : LoginScreen
  },
  Home:{
    screen:HomeScreen
  }
})
 const App=createAppContainer(MainNavigator);
 export default App;
