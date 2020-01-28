import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image} from 'react-native';
import {gotMeetings,getSingleMeeting} from '../store/meetings'
import { isLoading } from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient'
import * as Font from 'expo-font'
class HomeScreen2 extends React.Component{
constructor(props){
  super(props)
  this.state = {
    initialPosition: null,
    currentPosition: null,

 }
}
 async componentDidMount() {
  await Font.loadAsync({
    'bangers': require('../assets/fonts/Bangers-Regular.ttf')
  })
  await  this.props.getMeetings();
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const initialPosition = JSON.stringify(position);
            this.setState({ initialPosition:position });
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
         this.setState({ currentPosition:position });
      });
   }
   componentWillUnmount () {
      navigator.geolocation.clearWatch(this.watchID);
   }

 render(){

console.log(this.state)
if(this.state.currentPosition===null) return <Text>Loading...</Text>
   return(
    <LinearGradient
    colors={['#eeaeca', '#94bbe9','#9853b7']}
    style={{flex: 1}}
  >
    <View style = {styles.container}>

    <Text style={styles.title}>
      {'     '}Events near me{' '}
    </Text>
    <Text style={styles.subtitle}>{'          '}( Within 2.5 miles  )</Text>

    <View style={styles.allMeetings}>
    {(this.props.meetings.map((el,index)=>{
      let meeting=el.data;
      const event_latitude=meeting.location._latitude;
      const event_longitude=meeting.location._longitude;
      const currentLatitude=this.state.currentPosition.coords.latitude;
      const currentLongitude=this.state.currentPosition.coords.longitude;
      let ray=Math.pow((event_latitude-currentLatitude),2)+Math.pow((event_longitude-currentLongitude),2);
      const location={
        latitude:meeting.location._latitude,
        longitude:meeting.location._longitude
       };
       let date,hour,minute='';
       if(typeof meeting.date==='string'){
         date=new Date(meeting.date).toString().slice(0,10).trim()
         hour=new Date(meeting.date).getHours()
        minute=new Date(meeting.date).getMinutes()
       }
       else
       { date= new Date(meeting.date._seconds * 1000).toString().slice(0,10).trim()
        hour=new Date(meeting.date._seconds * 1000).getHours()
        minute=new Date(meeting.date._seconds * 1000).getMinutes()}

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
       }
      if(ray<0.00040) return <View style={styles.meeting} key={index}>
        <Text
        onPress={()=>
        this.props.navigation.navigate('SingleMeeting',meetingSingleview)}>{meeting.name}</Text>
      </View>

    }))}
    </View>

 </View>
 </LinearGradient>
   )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  allMeetings: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',

  }
,  meeting: {

  width:200,
  justifyContent:"space-between",
  alignItems: 'center',
  borderRadius:13,
  margin:8,
  backgroundColor: "#f4f4f4",
  opacity:0.7,
  padding :10

},
title:{
   fontFamily:"bangers",
  fontSize:35,
  position:"absolute",
  top: "10%",
  left:"18%",
},
subtitle:{
  fontSize:20,
  position:"absolute",
  top: "15%",
  left:"18%",
}
})

const mapStateToProps=(state)=>({
  meetings:state.meetings
})
const mapDispatchToProps=(dispatch)=>({
  getMeetings:()=>dispatch(gotMeetings()),
  getMeeting:(meeting)=>dispatch(getSingleMeeting(meeting))
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen2)
