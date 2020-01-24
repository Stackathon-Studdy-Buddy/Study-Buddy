import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator,} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons'
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// const MainNavigator= createStackNavigator({
//   Login:{
//     screen : LoginScreen
//   },
//   Home:{
//     screen:HomeScreen
//   },
//   Settings:{
//     screen:Settings
//   }
// })
const HomeScreenTabNavigator=createBottomTabNavigator({
 HomeScreen,
 Profile,
 Settings,
})
const AppDrawerNavigator=createDrawerNavigator({
  Home:{
    screen:HomeScreenTabNavigator
  },
  Profile,
  Settings,

})
const AllNavigators=createSwitchNavigator({
  Welcome:{
    screen: LoginScreen
  },
  Home:{
    screen:AppDrawerNavigator
  },
  Settings:{
        screen:Settings
      }
})
 const App=createAppContainer(AllNavigators);
 export default App;
