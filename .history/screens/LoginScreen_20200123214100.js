import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class LoginScreen extends React.Component{

static navigationOptions={
  header:null
}

  render(){

    return(
        <View style={styles.container}>
          <Text>Login Screen</Text>
          <Button
          title="Login"
          onPress={
            ()=>this.props.navigation.navigate('Home')
          }
          />
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
