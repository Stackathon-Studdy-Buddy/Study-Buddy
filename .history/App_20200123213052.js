import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
class LoginScreen extends React.Component{

  render(){
  return (
    <View style={styles.container}>
      <Text>Hi!</Text>
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default  createStackNavigator({
  Login:{
    screen : LoginScreen
  }
})
