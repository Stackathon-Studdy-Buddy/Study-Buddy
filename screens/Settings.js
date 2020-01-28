import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button } from 'react-native';
import UpdateUserProfileScreen from './UpdateProfileForm'
import {updateProfile} from '../store/user'
import * as Font from 'expo-font'

class SettingsScreen extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'bangers': require('../assets/fonts/Bangers-Regular.ttf')
    })
  }

  render(){
    console.log("SETTINGS", this.props)

    return(
        <View style={styles.container}>

          <View style={styles.update}>
            <Text style={styles.fon}>Update Profile: </Text>
          </View>

          <View style={styles.inner}>

              <UpdateUserProfileScreen user={this.props.user} onUpdateProfile={this.props.onUpdateProfile} navigation={this.props.navigation}/>

          </View>

          <View style={styles.back}>
            <Button title="Back"
            onPress={()=>this.props.navigation.navigate('Home')}/>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position:"absolute",
    top: "8%",
  },
  update: {
    position:"absolute",
    top: "20%",
  },
  inner: {
    position:"absolute",
    top: "25%",
    left: "25%"
  },
  fon: {
    fontSize:20,
    fontFamily:"bangers"
  }
});

const mapStateToProps = function(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onUpdateProfile: function(user){
      const thunk = updateProfile(user)
      dispatch(thunk)
    }
  }
}

const Settings = connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)

export default Settings
