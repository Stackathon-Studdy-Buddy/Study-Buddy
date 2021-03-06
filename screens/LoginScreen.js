import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image} from 'react-native';
import * as Font from 'expo-font'
import db from '../server/firebase'
import {login} from '../store/user'

class LoginScreen extends React.Component{

  constructor(props){
    super(props)
    this.state={
      email:'',
      password:''
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'bangers': require('../assets/fonts/Bangers-Regular.ttf')
    })
  }

  render(){

    return(
      <ImageBackground source={require('../c.jpg')} style={styles.container} >
      <View style={styles.inner}>
        <Text style={styles.title}>Study Buddy </Text>
        <View style={styles.form}>

          <TextInput
          value={this.state.email}
          onChangeText={(email)=>this.setState({email})}
          autoCapitalize= 'none'
          placeholder={'Email'}
          style={styles.input}
          placeholderTextColor="white"
          />

          <TextInput
          value={this.state.password}
          onChangeText={(password)=>this.setState({password})}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor="white"
          />

          {!!this.state.nameError && (<Text style={{ color: "red" ,alignSelf:"center"}}>{this.state.nameError}</Text>)}

         <Button
          title="Login"
          style={styles.btn}
          onPress={
             async ()=>{
              const email=this.state.email.toLocaleLowerCase()
              const password=this.state.password

              await this.props.onLogin(email, password)

              if(this.props.user.email){
                return this.props.navigation.navigate('Map')
              }
              else{
                  this.setState(() => ({ nameError: null }));
                  this.setState(() => ({ nameError: "Wrong email or password!" }));
              }
            }
          }
          color="white"
          />
          </View>
         </View>
         <View style={styles.footer}>
        <Text>Not a member yet?</Text>
        <Button title="Sign up"
        onPress={() => {return this.props.navigation.navigate('Signup')}}
        />
          </View>
        </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  inner:{
  position:"absolute",
  top: "35%",
  left:"22.6%",
  backgroundColor: "#282c34",
  padding: 15,
  paddingTop:18,
  borderRadius:25,
  opacity:0.9

  },
  form:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
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
  footer:{
  position:"absolute",
  top: "85%",
  left:"35%",
  },
  title:{
    // fontFamily:"bangers",
    fontSize:35,
    position:"absolute",
    top: "-150%",
    left:"18%",
  }
});

const mapStateToProps = function(state) {
  return {
    user: state.user
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
    onLogin: function(email, password){
      const thunk = login(email, password)
      dispatch(thunk)
    }
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

export default Login
