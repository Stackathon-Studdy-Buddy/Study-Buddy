import React from 'react';
import { StyleSheet, Text, View,TextInput,Button ,DatePickerIOS} from 'react-native';
import MapView,{Marker,Callout} from 'react-native-maps'
import Geocode from 'react-geocode'

require('../secrets')
import {connect} from 'react-redux'
import {addedMeetings} from '../store/meetings'
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

class AddMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude:  40.721390,
        longitude:  -73.994587,
        latitudeDelta: 0.0250,
        longitudeDelta: 0.0200,
      },


          name:"",
          description:"",
          address:"",
          date:new Date(),

            location:{
              latitude:       null,
              longitude:      null,

          }

      }
    }


     onClick= async(lat,lng) =>{
      await  getAdress(lat,lng).then((data) => {
         this.setState({
           address: data
             })
       }).catch((error) => {
         console.log('Error fetching address: ' + error);
       });
       }
  onMapPress=(e)=> {

    const location=e.nativeEvent.coordinate

    this.setState({
     location:location
    })
    const lat=this.state.location.latitude;
    const lng=this.state.location.longitude;
    const region={
      latitude:lat,
      longitude:lng,
      latitudeDelta: 0.0750,
      longitudeDelta: 0.0700,
    }
      if(lat!==null&&lng!==null){
       this.onClick(lat,lng)
       this.setState({region})
      }
    }

  render() {

    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        region={this.state.region}
        zoomEnabled={true}
        zoomTapEnabled={true}
        pitchEnabled={true}
        onPress={this.onMapPress}
        >
          {(this.state.location.latitude!==null&&this.state.location.longitude!==null)?
        <Marker
          coordinate={this.state.location}
          title={this.state.name}
          description={String(this.state.date)}

         />:null
          }
      </MapView>


      <View style={styles.inner} >
      <TextInput placeholder='Name' value={this.state.name}
            style={styles.input}
            onChangeText={(name)=>this.setState({name})}
            placeholderTextColor="white"/>

            <TextInput placeholder='Description' value={this.state.description}
            style={styles.input}
            onChangeText={(description)=>this.setState({description})}
            placeholderTextColor="white"/>
              <TextInput placeholder='Address' value={this.state.address}
            style={styles.input}
            onChangeText={(address)=>this.setState({address})}
            placeholderTextColor="white"/>


<DatePickerIOS
date={this.state.date}
onDateChange={(date)=>this.setState({date})}
style={{backgroundColor:"white",borderRadius:25}}
/>

            <Button title="Submit!"
            style={styles.btn}
            onPress={async ()=>{

              const meeting={
                id:this.props.meetings.length+1,
                name:this.state.name,
                location:this.state.location,
                description:this.state.description,
                date:this.state.date
              }
             await this.props.add(meeting);
             return this.props.navigation.navigate('Map');
            }}
            color="white"/>
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
    justifyContent: 'space-evenly',
  },
  map: {
    position:"absolute",
    top: "2%",
    left:"5.6%",
    borderRadius:20,
   width:"90%",
   height:"35%",

  },  input:{
    width:300,
    height:46,
    padding:10,
    borderWidth:1,
    borderColor:"white",
    borderRadius:15,
    marginBottom:10,
    color:"white",
  },
  btn: {
    width:190,
    height:44,
    backgroundColor:`white`

  }, inner:{
    position:"absolute",
    top: "38%",
    left:"11.6%",
    backgroundColor: "#282c34",
    padding: 15,
    paddingTop:10,
    borderRadius:25,
    opacity:0.9,


    }
});
const mapStateToProps=(state)=>({
  meetings:state.meetings
})
const mapDispatchToProps=(dispatch)=>({
  add:(meeting)=>dispatch(addedMeetings(meeting))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddMeeting);
