import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,ImageBackground } from 'react-native';


export default class LoginScreen extends React.Component{

constructor(props){
  super(props)
  this.state={
    email:'',
    password:''
  }
}
  render(){

    return(
      <View style={styles.container}>
      <ImageBackground source={`https://st2.depositphotos.com/5044661/10513/v/950/depositphotos_105138180-stock-illustration-various-colored-dots-connected-with.jpg`} style={{width: '100%', height: '100%'}}>

         <View style={styles.form}>

           <TextInput
           value={this.state.email}
           onChangeText={(email)=>this.setState({email})}
           placeholder={'Email'}
           style={styles.input}
           />

           <TextInput
           value={this.state.password}
           onChangeText={(password)=>this.setState({password})}
           placeholder={"Password"}
           secureTextEntry={true}
           style={styles.input}

           />
   {!!this.state.nameError && (
          <Text style={{ color: "red" ,alignSelf:"center"}}>{this.state.nameError}</Text>
        )}
         <Button
          title="Login"
          onPress={
            ()=>{
              const email=this.state.email.toLocaleLowerCase()
              const password=this.state.password.toLocaleLowerCase()
              // if (email.trim() === "") {
              //   this.setState(() => ({ nameError: "Email required " }));
              // } else if(password.trim()===""){
              //   this.setState(() => ({ nameError: "Password required " }));
              // }else {
              //   this.setState(() => ({ nameError: null }));
              // }
              if(email==='liana.andreea97@yahoo.com'&&password==='123')
              {
                return this.props.navigation.navigate('Home')
              }else{
                this.setState(() => ({ nameError: "Wrong email or password!" }));
              }
            }
          }
          style={styles.input}
          />
         </View>

        </ImageBackground>
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
    borderBottomColor:"black",
    marginBottom:10
  }
});
