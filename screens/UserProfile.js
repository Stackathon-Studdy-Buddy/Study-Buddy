import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image} from 'react-native';
import {loadUser, updateProfile} from '../store/user'
import UpdateUserProfileScreen from './UpdateProfileForm'

class UserProfileScreen extends React.Component{

  componentDidMount(){
    this.props.onLoadUser()
  }

  render(){
    console.log("PROFILE", this.props.user)
    console.log("STATE", this.state)
    return(
      <View style={styles.container}>
        <Text>PROFILE:</Text>
        <Text>{this.props.user.firstName} {this.props.user.lastName}</Text>
        <Text>email: {this.props.user.email}</Text>

        {/* <Button title="Update Profile"
            onPress={() => console.log("UPDATE TIME")}
            style={styles.btn}/> */}

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
    justifyContent: 'center',
  },
});


const mapStateToProps = function(state) {
  return {
    user: state.user
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
    }
  }
}

const UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen)

export default UserProfile
