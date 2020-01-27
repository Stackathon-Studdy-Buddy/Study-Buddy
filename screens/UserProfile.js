import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image} from 'react-native';
import {loadUser, updateProfile} from '../store/user'
import UpdateUserProfileScreen from './UpdateProfileForm'
import * as Font from 'expo-font'

const image = require('../public/blank.png')

class UserProfileScreen extends React.Component{

  async componentDidMount() {
    await Font.loadAsync({
      'bangers': require('../assets/fonts/Bangers-Regular.ttf')
    })
  }

  render(){
    console.log("USER PROFILE PROPS", this.props)
    console.log("MEETINGS", this.props.meetings)
    return(
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text style={styles.fon}>{this.props.user.firstName} {this.props.user.lastName}</Text>

        <Image
          style={{width: 100, height: 100}}
          source={image}
        />

        <Text>email: {this.props.user.email}{"\n"}</Text>

        {/* <Text>Update Profile: </Text>
        <View>
          <UpdateUserProfileScreen user={this.props.user} onUpdateProfile={this.props.onUpdateProfile}/>
        </View> */}


        <Text style={styles.fon}>{"\n"}My Meetings:{"\n"}</Text>
        <View style={styles.allMeetings}>
          {this.props.meetings.map(meeting => {
            const date= new Date(meeting.data.date._seconds * 1000).toString().slice(0,10).trim()
            const hour=new Date(meeting.data.date._seconds * 1000).getHours()
            const minute=new Date(meeting.data.date._seconds * 1000).getMinutes()
            if(meeting.data.user === this.props.user.email){
              return (
                <View style={styles.meeting} key={meeting.id}>
                  <Text>{date}</Text>
                  <Text>{meeting.data.name}</Text>
                </View>
              )
            }
          })}
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
    justifyContent: 'flex-start',
  },
  meeting: {
    padding: '3%',
    borderRadius: 4,
    borderWidth: 0.5,
  },
  fon : {
    fontSize:30,
    fontFamily: 'bangers'
  },
  allMeetings: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '3%'
  }
});


const mapStateToProps = function(state) {
  return {
    user: state.user,
    meetings: state.meetings
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
