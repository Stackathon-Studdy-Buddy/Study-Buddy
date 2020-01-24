import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';


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

         <Button
          title="Login"
          onPress={
            ()=>{
              console.log(this.state)
              return this.props.navigation.navigate('Home')
            }
          }
          style={styles.input}
          />
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
