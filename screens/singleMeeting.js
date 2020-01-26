import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {connect} from 'react-redux'
import {getSingleMeeting} from '../store/meetings'
import MapView,{Marker,Callout} from 'react-native-maps'
class SigleMeeting extends React.Component{

constructor(props){
  super(props)

    this.state = {
      adress: this.props.navigation.state.params.address,
      time: this.props.navigation.state.params.time,
      description: this.props.navigation.state.params.description,
      date: this.props.navigation.state.params.date,
      location: this.props.navigation.state.params.location,
      name: this.props.navigation.state.params.name
  }
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




            <Button title="Back" color='black'
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
    justifyContent: 'space-around',
  }, map: {

   width:"60%",
   height:"30%"
  }
});
const mapStateToProps=(state)=>({
  meetings:state.meetings
})
const mapDispatchToProps=(dispatch)=>({
  getMeeting:(meeting)=>dispatch(getSingleMeeting(meeting))
})
export default connect(mapStateToProps,mapDispatchToProps)(SigleMeeting);
