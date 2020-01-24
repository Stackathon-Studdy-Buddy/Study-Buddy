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
import Add from './screens/AddMeeting'
import Icon from '@expo/vector-icons/Ionicons'
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

const DashBoardTabNavigator=createBottomTabNavigator({
 Home:{
   screen:HomeScreen,
   navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-home" size={24}/>
    )
   }
 },
 Add:{
   screen:Add,
   navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-add-circle-outline" size={24}/>
    )
   }
 },
 Profile:{
  screen:Add,
  navigationOptions:{
   tabBarIcon:({tintColor})=>(
     <Icon name="ios-ionitron" size={24}/>
   )
  }
 }},{
  navigationOptions:(({navigation})=>{
    const {routeName}=navigation.state.routes[navigation.state.index];
    return{
      headerTitle:routeName
    }
  })
})
const DashBoardStackNavigator=createStackNavigator({
  Connections:DashBoardTabNavigator
 },{
   defaultNavigationOptions:(({navigation})=>{
     return{
       headerLeft:()=> <Icon
       onPress={()=>navigation.openDrawer()}
       name="md-menu" size={30}
       style={{paddingLeft:10}}
       />
     }
   })
 })
const AppDrawerNavigator=createDrawerNavigator({
  Home:{
    screen:DashBoardStackNavigator
  },
  // Profile,
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
      },
  Profile
})
 const App=createAppContainer(AllNavigators);
 export default App;
