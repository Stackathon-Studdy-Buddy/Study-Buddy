import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen'
import Settings from './screens/Settings'

 const MainNavBar=createBottomTabNavigator({
  Home:{
    screen:HomeScreen,
  },
  Settings:{
    screen:Settings
  }
})
export default MainNavBar;
