import React,{Fragment,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Button, Alert,AsyncStorage } from 'react-native';
import {createAppContainer,createSwitchNavigator,} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer'
import Login from './screens/LoginScreen'
import Signup from './screens/Signup'
import HomeScreen from './screens/HomeScreen'
import Settings from './screens/Settings'
import Profile from './screens/UserProfile'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Add from './screens/AddMeeting'
import Icon from '@expo/vector-icons/Ionicons'
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux'
import store from './store/index'
import SingleMeeting from './screens/singleMeeting'
import HomeScreen2 from './screens/HomeScreen2'
const DashBoardTabNavigator=createBottomTabNavigator({

 Map:{
   screen:HomeScreen,
   navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-map" size={24}/>
    )
   }
 },

 List:{
  screen:HomeScreen2,
  navigationOptions:{
   tabBarIcon:({tintColor})=>(
     <Icon name="ios-locate" size={24}/>
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
    screen:Profile,
    navigationOptions:{
     tabBarIcon:({tintColor})=>(
       <Icon name="ios-school" size={24}/>
     )
    }
   }
},{
  navigationOptions:(({navigation})=>{
    const {routeName}=navigation.state.routes[navigation.state.index];
    return{
      headerTitle:routeName,

    }
  }),

})
const DashBoardStackNavigator=createStackNavigator({
  Connections:DashBoardTabNavigator,
  SingleMeeting:SingleMeeting,
  Settings:Settings,
  Signup:Signup
 },{
   defaultNavigationOptions:(({navigation})=>{
     let header='';
     switch(navigation.state.routeName){
       case 'Settings':
       header='Settings'
       break;
       case 'Signup':
        header='Sign Up'
        break;
        case 'SingleMeeting':
        header='Meeting'
        break;
        default:
          break;
     }
     if(header.length!==0)
     {return{
      headerTitle:header,
      headerLeft:()=> <Icon
      onPress={()=>navigation.navigate('Map')}
      name="md-arrow-back" size={30}
      style={{paddingLeft:10}}
      />
     }}

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
Settings:{
  screen:Settings
}

},
{
  contentComponent:(props)=>(
    <View style={{flex:1}}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Button title="Logout" onPress={()=>
       Alert.alert('Log out',
       "Do you want to log out?",
       [

          {
            text:'Cancel',onPress:()=>{return null}
          },
          {
            text:'Confirm',onPress:()=>{

              props.navigation.navigate('Welcome')
            }
          }
       ],
       {cancelable:false}
        )
      }/>
      </SafeAreaView>
    </View>
  )
}
)
const AllNavigators=createSwitchNavigator({
  Welcome:{
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Home:{
    screen:AppDrawerNavigator
  },
  Settings:{
        screen:Settings
      },
  Profile,
  SingleMeeting
})
const MainApp=createAppContainer(AllNavigators);

 const App=()=>{
return(
  <Provider store={store} >
       <MainApp/>
       </Provider>
  )
 }
 export default App;
