import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator,} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import Settings from './screens/Settings'
import MainNavBar from './MainNavbar'
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
  },
  Settings:{
    screen:Settings
  }
})
const AllNavigators=createSwitchNavigator({
  Welcome:{
    screen: LoginScreen
  },
  Home:{
    screen:HomeScreen
  }
})
 const App=createAppContainer(AllNavigators);
 export default App;
