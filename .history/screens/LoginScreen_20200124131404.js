import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image} from 'react-native';
import * as Font from 'expo-font'

async function addUser(email,password) {
  await ref.add({
    email: email,
    password: password,
  });

}
export default class LoginScreen extends React.Component{

constructor(props){
  super(props)
  this.state={
    email:'',
    password:''
  }
}
async componentDidMount() {
  await Font.loadAsync({
    'bangers': require('../assets/fonts/Bangers-Regular.ttf'),
  });
}
  render(){
    const ref = firestore().collection('users');
    return(
      <ImageBackground source={require('../c.jpg')} style={styles.container} >
<View style={styles.inner}>
  <Text style={styles.title}>Study Buddy </Text>
         <View style={styles.form}>

           <TextInput
           value={this.state.email}
           onChangeText={(email)=>this.setState({email})}
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
   {!!this.state.nameError && (
          <Text style={{ color: "red" ,alignSelf:"center"}}>{this.state.nameError}</Text>
        )}
         <Button
          title="Login"
          style={styles.btn}
          onPress={
            ()=>{
              const email=this.state.email.toLocaleLowerCase()
              const password=this.state.password
              // if (email.trim() === "") {
              //   this.setState(() => ({ nameError: "Email required " }));
              // } else if(password.trim()===""){
              //   this.setState(() => ({ nameError: "Password required " }));
              // }else {
              //   this.setState(() => ({ nameError: null }));
              // }
              firestore.collection('users').add({
                email:this.state.email,
                password:this.state.password
              })

              if(email==='1'&&password==='1')
              {
                return this.props.navigation.navigate('Home')
              }else{
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
        <Button title="Sign up"/>
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
