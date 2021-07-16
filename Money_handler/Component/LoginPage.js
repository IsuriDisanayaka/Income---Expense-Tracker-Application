import { Form } from 'native-base'
import React, { Component } from 'react'
import {KeyboardAvoidingView, Pressable,Text,StyleSheet, View ,TextInput,TouchableOpacity,Alert,button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password:''
    };
  }

  clearText = () => {
    this.setState({ name: '' })
    this.setState({ password: '' })
}
 
  render() {
    return (
      <KeyboardAvoidingView 
      style={styles.container}
      behavior='padding'>
            
            <View>
            <Text style={styles.letters}>Money Handler</Text>
            <Text style={styles.lettersTwo}>A bouquet of success</Text>
       
       <TextInput 
               placeholder="User Name"
               style={styles.input} 
               onChangeText={(value) => this.setState({ name: value })}
               value={this.state.name} 
               />
       <TextInput
               placeholder="Password"
               style={styles.input}
               onChangeText={(value) => this.setState({ password: value })}
               value={this.state.password}
               />
               
               
       <TouchableOpacity  
         onPress={()=>{
          this.props.navigation.navigate('Dash Board')
      }}  
       
    //    onPress={() => {
    //     fetch("http://192.168.1.100:3000/IncomeRouter?name=" + this.state.name + "&password=" + this.state.password, {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => {
    //             if (json) {
    //                 AsyncStorage.setItem('isLogedIn', "true")
    //                 AsyncStorage.setItem('userId', json._id)
    //                 console.log(json._id);
                    
    //                 this.clearText();
    //             } else {
    //                 Alert.alert(
                         
    //                     "Email Or Password is invalid",
                      
                       
    //                 );
                     
                         
                      
    //             }
    //         })
    //         .catch((error) => {
    //             Alert.alert(
                    
    //                 "Email is not valid, Please Enter valid Email",
                    
    //             );
    //         })
         
    // }
    // }



   
     style={styles.button}>
        <Text style={styles.press}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
       onPress={()=>{
        this.props.navigation.navigate('Sign Up')
    }}  
        style={styles.buttonSign} 
   >
        <Text style={styles.press}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

      </View>
      </KeyboardAvoidingView>

    )
  }
  
}
const styles = StyleSheet.create({
  container:{
    flex:1,
       backgroundColor:'#7A4210',
       alignItems:'center',
       justifyContent:'center',
    
  },
  letters:{
    color:'#ecf0f1',
    fontSize: 40,
    fontFamily:'cursive',
    fontWeight: 'bold',
    marginHorizontal:55,
    marginVertical:40,
},
lettersTwo:{
  fontSize: 28,
 color:'#f7f1e3',
  fontFamily:'courier new',
  fontWeight:'bold',
  marginHorizontal:13,
 },
 input:{
  height:50,
  marginHorizontal:55,
   marginVertical:10,
   borderWidth:2,
   borderColor:'#ffff',
  width:300,
  color:'black',
   paddingHorizontal:25,
   alignItems:'center',
   top:100,

 },

 button:{
  height:40,
    marginHorizontal:55,
   marginVertical:100,
   borderWidth:2,
   borderColor:'black',
  width:300,
  color:'black',
  backgroundColor:'#DDDDDD',
  fontWeight:'bold',
   alignItems:'center',
  

 },
 press:{
  alignItems:'center',
  fontSize:20,
  fontWeight:'bold'
 },
buttonSign:{
  height:35,
    marginHorizontal:40,
   marginVertical:50,
   borderWidth:2,
   borderColor:'#DDDDDD',
  width:340,
  color:'#DDDDDD',
  fontWeight:'bold',
   alignItems:'center',
  top:-100
}
})