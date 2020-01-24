import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator,} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import Settings from './screens/Settings'
import MainNavBar from './MainNavbar'
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
  },
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0066cc',
      color: '#fff'
    },
    headerTintColor: '#fff',
    headerTitleStyle: { color: '#fff' }
  }
})
const AppDrawerNavigator=createDrawerNavigator({
  Home:{
    screen:HomeScreenTabNavigator
  }
})
const AllNavigators=createSwitchNavigator({
  Welcome:{
    screen: LoginScreen
  },
  Home:{
    screen:AppDrawerNavigator
  }
})
 const App=createAppContainer(AllNavigators);
 export default App;
