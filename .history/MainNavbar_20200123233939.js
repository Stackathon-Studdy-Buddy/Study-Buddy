import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen'
import Settings from './screens/Settings'
import Icon from 'react-native-vector-icons'
 const MainNavBar=createBottomTabNavigator({
  Home:{
    screen:HomeScreen,
  },
  Settings:{
    screen:Settings
  }
})
export default MainNavBar;
