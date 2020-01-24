import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image} from 'react-native';
import * as Font from 'expo-font'

export default class Signup extends React.Component{

  constructor(props){
    super(props)
    this.state={
      firstName:'',
      lastName:'',
      email: '',
      password: ''
    }
  }

  onChangeText1(value){
    this.setState({firstName: value})
  }
  onChangeText2(value){
    this.setState({lastName: value})
  }
  onChangeText3(value){
    this.setState({email: value})
  }
  onChangeText4(value){
    this.setState({password: value})
    console.log(this.state)
  }

  render(){

    return(

        <View style={styles.signupForm}>

          <Button title="Back"
          onPress={()=>this.props.navigation.navigate('Welcome')}/>

          <TextInput placeholder='first name' value={this.state.firstName}
          onChangeText={(value) => this.onChangeText1(value)}
          onSubmitEditing={this.onSubmit}/>

          <TextInput placeholder='last name' value={this.state.lastName}
          onChangeText={(value) => this.onChangeText2(value)}
          onSubmitEditing={this.onSubmit}/>

          <TextInput placeholder='email' value={this.state.email}
          onChangeText={(value) => this.onChangeText3(value)}
          onSubmitEditing={this.onSubmit}/>

          <TextInput placeholder='password' value={this.state.password}
          onChangeText={(value) => this.onChangeText4(value)}
          onSubmitEditing={this.onSubmit}/>


        </View>
    )
  }
}

const styles = StyleSheet.create({
  signupForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back : {
    justifyContent: 'flex-start',

  }
})
