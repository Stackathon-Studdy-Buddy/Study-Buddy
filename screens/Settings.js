import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button , ImageBackground, Image} from 'react-native';
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
      <ImageBackground source={require('../public/yellow-gradient.jpeg')}  style={styles.outter}>

          <View style={styles.update}>
            <Text style={styles.fon}>Update Profile: </Text>
          </View>

          <View style={styles.inner}>
              <UpdateUserProfileScreen user={this.props.user} onUpdateProfile={this.props.onUpdateProfile} navigation={this.props.navigation}/>
          </View>

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  outter : {
    flex : 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  update: {
    position:"absolute",
    top: "7%",
    left: '22%',
  },
  inner: {
    position:"absolute",
    top: "15%",
    left: "16.5%"
  },
  fon: {
    fontSize:40,
    fontFamily:"bangers",
    position:"absolute",
    top: "15%",
    left: '15%',
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
