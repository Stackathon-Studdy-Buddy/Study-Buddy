import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import MapView,{Marker} from 'react-native-maps'



export default class Settings extends React.Component{


  render(){

    return(
        <View style={styles.container}>

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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin:15,
   width:"92%",
   height:"60%"
  },
});
