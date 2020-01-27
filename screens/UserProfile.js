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
    let haveMeetings=false;
    let Image_Http_URL ={uri:this.props.user.imageURL}
    return(
      <View style={styles.container}>
         <View style={styles.header}>
            <View style={styles.headerContent}>


        <Text style={styles.fon}>{this.props.user.firstName} {this.props.user.lastName}{'  '}</Text>

        <Image
          style={styles.avatar}
          source={Image_Http_URL}
        />

        <Text style={styles.userInfo}>


          {this.props.user.email}{"\n"}</Text>
            </View>
            </View>
    <View style={styles.body}>
        <Text style={styles.fon}>{"\n"}My Meetings{"\n"}</Text>



        <View style={styles.allMeetings}>
          {this.props.meetings.map(meeting => {
            const date= new Date(meeting.data.date._seconds * 1000).toString().slice(0,10).trim()
            const hour=new Date(meeting.data.date._seconds * 1000).getHours()
            const minute=new Date(meeting.data.date._seconds * 1000).getMinutes()
            if(meeting.data.user === this.props.user.email){
              haveMeetings=true;
              return (
                <View style={styles.meeting} key={meeting.id}>
                  <Text>{date}</Text>
                  <Text>{meeting.data.name}</Text>
                </View>
              )
            }
          })}
          { (haveMeetings===false)?
          <View>
          <Text>You don't have any meetings yet...</Text>
          <Button
          title='Add a meeting'
          onPress={()=>this.props.navigation.navigate('Add')}
          color="black"
          />
          </View>:null
      }
                  </View>



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

    width:200,
    justifyContent:"space-between",
    alignItems: 'center',
    borderRadius:13,
    padding: '3%',
    margin:8,
    backgroundColor: "#f4f4f4",
    opacity:0.7

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

  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',

  },
  header:{
    backgroundColor: "#f4f4f4",
    width:"100%",
    height:"35%",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
    width:"100%"
  },item:{
    width:200
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
