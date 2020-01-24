import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen'
import Settings from './screens/Settings'
import Icon from 'react-native-vector-icons'
 const MainNavBar=createBottomTabNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-home" size={24}/>
      )
    }
  },
  Settings:{
    screen:Settings,
    navigationOptions:{
      tabBarLabel:'Settings',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-settings" size={24}/>
      )
    }
  }
})
export default MainNavBar;
