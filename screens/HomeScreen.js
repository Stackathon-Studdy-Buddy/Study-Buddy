import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import {connect} from 'react-redux'
import {gotMeetings,getSingleMeeting} from '../store/meetings'
import MapView,{Marker,Callout} from 'react-native-maps'

import Geocode from 'react-geocode'
require('../secrets')

Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_KEY}`);
Geocode.setLanguage("en");
Geocode.setRegion("us");


const getAdress=async (lat,lng)=>{
  let address='';
  try{
    const data=await Geocode.fromLatLng(lat,lng);
    address=data.results[0].formatted_address;

  }catch(err){
    console.log(err)
  }
  return address;
}

 class HomeScreen extends React.Component{
constructor(props){
  super(props)
  this.state={
     region: {
        latitude:  40.721390,
        longitude:  -73.994587,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
  }

this.onRegionChange=this.onRegionChange.bind(this)
this.onClick=this.onClick.bind(this)
}
  async componentDidMount(){
   await  this.props.getMeetings();
  }


  onRegionChange(region){
    this.setState({ region });
  }
 async onClick(lat,lng) {
 await  getAdress(lat,lng).then((data) => {
    this.setState({
      address: data
        })
  }).catch((error) => {
    console.log('Error fetching address: ' + error);
  });
  }
  render(){
const meetings=this.props.meetings;

if(meetings.length===0) return <View style={styles.container}><Text>Loading...</Text></View>

    return(
        <View style={styles.container}>
        <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        zoomEnabled={true}
        zoomTapEnabled={true}>



         {this.props.meetings.map((el,index)=>{
           const meeting=el.data;
           const location={
            latitude:meeting.location._latitude,
            longitude:meeting.location._longitude
           };
           const date= new Date(meeting.date._seconds * 1000).toString().slice(0,10).trim()
           const hour=new Date(meeting.date._seconds * 1000).getHours()
           const minute=new Date(meeting.date._seconds * 1000).getMinutes()
           const description=meeting.description;
           const d=`${date}, ${hour}:${minute}
           `
           const meetingSingleview={
             date:date,
             time:`${hour}:${minute}`,
             description:description,
             address:this.state.address,
             location:location,
             name:meeting.name,
             user:meeting.user
           }
         return (
         <Marker
          coordinate={location}
          title={meeting.name}
          description={d}
          key={index}
          onPress={()=>{this.onClick(location.latitude,location.longitude)}}

         >
      <Callout onPress={()=>{

        return this.props.navigation.navigate('SingleMeeting',meetingSingleview
          )}}style={styles.description} >

          <View >
            <Text style={styles.title}>{meeting.name}</Text>
            <Text>{d}</Text>
         </View>

        </Callout>

         </Marker>)

         })}


        </MapView>

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
  },
  map: {
    width:"100%",
    height:"100%",
  },
  title:{
    fontSize:15,
    fontStyle:"italic"
  },
  description:{
    width:120,
    margin:0,
  }
});
const mapStateToProps=(state)=>({
  meetings:state.meetings
})
const mapDispatchToProps=(dispatch)=>({
  getMeetings:()=>dispatch(gotMeetings()),
  getMeeting:(meeting)=>dispatch(getSingleMeeting(meeting))
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
