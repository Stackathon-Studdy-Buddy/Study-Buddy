import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {connect} from 'react-redux'
import {getSingleMeeting} from '../store/meetings'
import MapView,{Marker,Callout} from 'react-native-maps'
import * as Font from 'expo-font'
class SigleMeeting extends React.Component{

constructor(props){
  super(props)

    this.state = {
      address: this.props.navigation.state.params.address,
      time: this.props.navigation.state.params.time,
      description: this.props.navigation.state.params.description,
      date: this.props.navigation.state.params.date,
      location: this.props.navigation.state.params.location,
      name: this.props.navigation.state.params.name
  }
}

async componentDidMount() {
  await Font.loadAsync({
    'bangers': require('../assets/fonts/Bangers-Regular.ttf')
  })
  }

  render(){
console.log('here',this.state)
const region= {
  latitude:  this.state.location.latitude,
  longitude: this.state.location.longitude,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
    return(
        <View style={styles.container}>



      <MapView
        style={styles.map}
        region={region}
        zoomEnabled={true}
        zoomTapEnabled={true}>
        <Marker
          coordinate={this.state.location}
          title={this.state.name}
          description={this.state.date}
         />
      </MapView>

    <Text style={{fontSize:20,fontStyle:"italic",fontFamily:"bangers"}}>{this.state.name}</Text>
      <View style={styles.info}>
        <Text style={styles.items}>Date:</Text>
        <Text style={{marginTop:5,marginBottom:5, marginLeft:20}}>{this.state.date}</Text>
        <Text style={styles.items}>Time:</Text>
        <Text style={{marginTop:5,marginBottom:5, marginLeft:20}}>{this.state.time}</Text>
        <Text style={styles.items}>Address:</Text>
        <Text style={{marginTop:5,marginBottom:5, marginLeft:20}}>{this.state.address}</Text>
        <Text style={styles.items}>Description:</Text>
        <Text style={{marginTop:5,marginBottom:5, marginLeft:20}}>{this.state.description}</Text>
      </View>






            <Button title="Back" color='black' style={styles.btn}
        onPress={() => {return this.props.navigation.navigate('Home')}}
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
    justifyContent: 'space-evenly',

  }, map: {
    borderRadius:20,
   width:"70%",
   height:"30%",

  },
  info:{

margin:25
  },
  items:{
    fontSize:20,
    fontStyle:"italic",
  fontFamily:"bangers",
    margin:10
  }
  ,
  btn:{
    position:"absolute",
    bottom:"100%"
  }
});
const mapStateToProps=(state)=>({
  meetings:state.meetings
})
const mapDispatchToProps=(dispatch)=>({
  getMeeting:(meeting)=>dispatch(getSingleMeeting(meeting))
})
export default connect(mapStateToProps,mapDispatchToProps)(SigleMeeting);
