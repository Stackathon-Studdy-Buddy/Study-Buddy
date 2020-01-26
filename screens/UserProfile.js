import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image} from 'react-native';
import {loadUser, updateProfile} from '../store/user'
import {gotMyMeetings} from '../store/mymeeting'
import UpdateUserProfileScreen from './UpdateProfileForm'

class UserProfileScreen extends React.Component{

  // componentDidMount(){
  //   this.props.onLoadMyMeeting('celiamacrae@gmail.com')
  // }

  render(){
    console.log("USER PROFILE PROPS", this.props)
    return(
      <View style={styles.container}>
        <Text>PROFILE:</Text>
        <Text>{this.props.user.firstName} {this.props.user.lastName}</Text>
        <Text>email: {this.props.user.email}</Text>

        <Text>Update Profile: </Text>
        <UpdateUserProfileScreen user={this.props.user} onUpdateProfile={this.props.onUpdateProfile}/>


      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


const mapStateToProps = function(state) {
  return {
    user: state.user,
    meetings: state.meetings
    // mymeetings : state.mymeetings
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onLoadUser: function(){
      const thunk = loadUser()
      dispatch(thunk)
    },
    onUpdateProfile: function(user){
      const thunk = updateProfile(user)
      dispatch(thunk)
    },
    // onLoadMyMeeting: function(id){
    //   const thunk = gotMyMeetings(id)
    //   dispatch(thunk)
    // }
  }
}

const UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen)

export default UserProfile
