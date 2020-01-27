import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View,Button,TextInput,ImageBackground ,Image, TouchableOpacity} from 'react-native';
import {updateProfile} from '../store/user'

const image1 = 'https://i.pinimg.com/originals/c8/00/a4/c800a46467ddc395c3962d566a01cc5f.jpg'
const image2 = 'https://imgs.heart.co.uk/images/22925?crop=16_9&width=660&relax=1&signature=9toNDoEzlG2Ek9Zw18w6cST3qnQ='
const image3 = 'https://media.wired.com/photos/59273185ac01987bf0138c5d/master/w_1773,c_limit/LoveEmoji1.jpg'
const image4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0jP-JfsVTI1DRPxB_ugH-Pj0qkDwi7mqvvw6e8otSqL5QJIa3w&s'
const image5 = 'https://cdn11.bigcommerce.com/s-tboh32g/images/stencil/608x608/products/380032/485764/crazyfaceboxfh22817__26156.1535018640.jpg?c=2&imbypass=on'
const image6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtCo99XIDQWfdsziMitAfnNJkLh9TLRM3ahc09bxeceEDMMks&s'
const image7 = 'https://www.emojirequest.com/images/CallMeFaceEmoji.jpg'
const image8 = 'https://ecdn.teacherspayteachers.com/thumbitem/Emoji-Faces-Lip-Sync-Emoji-Masks-for-Speaking-Singing-3603457-1535447428/original-3603457-1.jpg'
const image9 = 'https://www.emojirequest.com/images/TalkToTheHandEmoji.jpg'

export default class UpdateUserProfileScreen extends React.Component{
  constructor(props){
    super(props)
    this.state={
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      password: this.props.user.password,
      imageURL : this.props.imageURL
    }
  }

  onChangeText1(value){
    this.setState({firstName: value})
  }
  onChangeText2(value){
    this.setState({lastName: value})
  }
  onChangeText4(value){
    this.setState({password: value})
  }

  render(){
    console.log("UPDATE PROPS", this.props)
    return (
      <View style={styles.container}>

          <View style={styles.inner} >

            <TextInput placeholder='first name' value={this.state.firstName}
            style={styles.input}
            onChangeText={(value) => this.onChangeText1(value)}
            onSubmitEditing={this.onSubmit}
            placeholderTextColor="white"/>

            <TextInput placeholder='last name' value={this.state.lastName}
            style={styles.input}
            onChangeText={(value) => this.onChangeText2(value)}
            onSubmitEditing={this.onSubmit}
            placeholderTextColor="white"/>

            <TextInput placeholder='password' value={this.state.password}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(value) => this.onChangeText4(value)}
            onSubmitEditing={this.onSubmit}
            placeholderTextColor="white"/>

            <Text>{'\br'}</Text>
            <Text style={styles.choose}>Choose an Image:</Text>
            <Text>{'\br'}</Text>

            <View style={styles.imgBox}>
              <TouchableOpacity onPress={() => this.setState({imageURL: image1})}>
                <Image style={styles.img} source={{uri: image1}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({imageURL: image2})}>
                <Image style={styles.img} source={{uri: image2}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({imageURL: image3})}>
                <Image style={styles.img} source={{uri: image3}}/>
              </TouchableOpacity>
            </View>

            <Text>{'\br'}</Text>

            <View style={styles.imgBox}>
              <TouchableOpacity onPress={() => this.setState({imageURL: image4})}>
                <Image style={styles.img} source={{uri: image4}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({imageURL: image5})}>
                <Image style={styles.img} source={{uri: image5}}/>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => this.setState({imageUrl: {image3}})}> */}
              <TouchableOpacity onPress={() => this.setState({imageURL: image6})}>
                <Image style={styles.img} source={{uri: image6}}/>
              </TouchableOpacity>
            </View>

            <Text>{'\br'}</Text>

            <View style={styles.imgBox}>
              <TouchableOpacity onPress={() => this.setState({imageURL: image7})}>
                <Image style={styles.img} source={{uri: image7}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({imageURL: image8})}>
                <Image style={styles.img} source={{uri: image8}}/>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => this.setState({imageUrl: {image3}})}> */}
              <TouchableOpacity onPress={() => this.setState({imageURL: image9})}>
                <Image style={styles.img} source={{uri: image9}}/>
              </TouchableOpacity>
            </View>

            <Button title="Submit!"
            // onPress= {() => console.log(this.props)}
            onPress={async () => {
              await this.props.onUpdateProfile({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                imageURL: this.state.imageURL
                })
                return this.props.navigation.navigate('Profile')
              }}

            style={styles.btn}
            color="white"/>

          </View>

        </View>
    )
  }

}


const styles = StyleSheet.create({
  back: {
    position:"absolute",
    top: "50%",

  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    flexDirection: 'column',
  },
  inner:{
    position:"absolute",
    top: "35%",
    left:"-25%",
    backgroundColor: "#282c34",
    padding: 15,
    paddingTop:18,
    borderRadius:25,
    opacity:0.9

    },
    form:{
      top: "35%",
      // flex:1,
      // flexDirection:"column",
      // justifyContent:"center",
    },
    input:{
      width:200,
      height:44,
      padding:12,
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
    },
    img : {
      width: 50,
      height: 50,
      padding: 10,
      borderRadius: 10
    },
    imgBox : {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    choose : {
      color:"white",
    }
})


// const UpdateUserProfile = connect(null, mapDispatchToProps)(UserProfileScreen)

// export default UpdateUserProfile
