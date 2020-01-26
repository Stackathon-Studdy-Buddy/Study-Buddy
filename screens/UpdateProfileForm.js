import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image} from 'react-native';
import {updateProfile} from '../store/user'

export default class UpdateUserProfileScreen extends React.Component{
  constructor(props){
    super(props)
    this.state={
      firstName:'',
      lastName:'',
      email: this.props.user.email,
      password: ''
    }
  }

  onChangeText1(value){
    this.setState({firstName: value})
  }
  onChangeText2(value){
    this.setState({lastName: value})
  }
  onChangeText4(value){
    this.setState({password: value})
  }

  render(){
    console.log("UPDATE PROPS", this.props)
    return (
      <View style={styles.container}>

          <View style={styles.inner} >

            <TextInput placeholder='first name' value={this.state.firstName}
            style={styles.input}
            onChangeText={(value) => this.onChangeText1(value)}
            onSubmitEditing={this.onSubmit}
            placeholderTextColor="white"/>

            <TextInput placeholder='last name' value={this.state.lastName}
            style={styles.input}
            onChangeText={(value) => this.onChangeText2(value)}
            onSubmitEditing={this.onSubmit}
            placeholderTextColor="white"/>

            <TextInput placeholder='password' value={this.state.password}
            style={styles.input}
            onChangeText={(value) => this.onChangeText4(value)}
            onSubmitEditing={this.onSubmit}
            placeholderTextColor="white"/>

            <Button title="Submit!"
            onPress={() =>
              this.props.onUpdateProfile({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
                })
              }
            style={styles.btn}
            color="white"/>

          </View>

          {/* <View style={styles.back}>
            <Button title="Back to Login"
            onPress={() => this.props.navigation.navigate('Profile')}
            />
          </View> */}

        </View>
    )
  }

}


const styles = StyleSheet.create({
  back: {
    position:"absolute",
    top: "50%",

  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    flexDirection: 'column',
  },
  inner:{
    position:"absolute",
    top: "35%",
    left:"-25%",
    backgroundColor: "#282c34",
    padding: 15,
    paddingTop:18,
    borderRadius:25,
    opacity:0.9

    },
    form:{
      top: "35%",
      // flex:1,
      // flexDirection:"column",
      // justifyContent:"center",
    },
    input:{
      width:200,
      height:44,
      padding:12,
      borderWidth:1,
      borderColor:"white",
      borderRadius:15,
      marginBottom:10,
      color:"white",
    },
    btn: {
      width:190,
      height:44,
      backgroundColor:`white`

    },
})


// const UpdateUserProfile = connect(null, mapDispatchToProps)(UserProfileScreen)

// export default UpdateUserProfile
