import React, { Component } from 'react'
import {KeyboardAvoidingView, Pressable,Text,StyleSheet,Alert, View ,TextInput,TouchableOpacity,button} from 'react-native'
import { Container,Content,Item,Input ,Label, Form} from 'native-base' 

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
    };
}

clearText = () => {
    this.setState({ name: '' })
    this.setState({ email: '' })
    this.setState({ password: '' })
}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView 
      style={styles.container}
      behavior='padding'>
            
            <View>
            <Text style={styles.letters}>Welcome!</Text>
            <Text style={styles.lettersTwo}>Money Handler</Text>
       
      
      </View>
    
           
      <Item floatingLabel last style={styles.input}>
              <Label style={{color:'#dff9fb'}}>User Name</Label>
              <Input 
               onChangeText={(value) => this.setState({ name: value })}
               value={this.state.name}
              style={{color:'#dff9fb'}}/>
               </Item>

            <Item floatingLabel last style={styles.input}>
              <Label style={{color:'#dff9fb'}}>Email</Label>
              <Input 
               onChangeText={(value) => this.setState({ email: value })}
               value={this.state.email}
              style={{color:'#dff9fb'}}/>
               </Item>

               <Item floatingLabel last style={styles.input}>
              <Label style={{color:'#dff9fb'}}> Password</Label>
              <Input 
                onChangeText={(value) => this.setState({ password: value })}
                value={this.state.password}
              style={{color:'#dff9fb'}} />
               </Item>

               <TouchableOpacity 


onPress={() => {
  fetch("http://192.168.1.101:3000/UserRoute", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
      })
     
  })
      .then((response) => response.json())
      .then((json) => {
        if (json) {
            Alert.alert(
                "Signed Up Successfully, Please Login..!",
               
            );
            this.clearText()
        }
    })
    .catch((error) => {
        Alert.alert(
            "SignUp Error..!",
            "Please enter Valid Details",
          
        );
      console.log("eror")
    })
}
}










        //         onPress={()=>{
        //     this.props.navigation.navigate('LoginPage');
        // }} 
        style={styles.button}>
        <Text style={styles.press}>Sign Up</Text>
      </TouchableOpacity>
        
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
    fontFamily:'arial',
    fontWeight: 'bold',
    marginHorizontal:100,
    marginVertical:0,
},
lettersTwo:{
  fontSize: 28,
 color:'#f7f1e3',
  fontFamily:'courier new',
  fontWeight:'bold',
  marginHorizontal:80,
 },
 input:{
  height:50,
  width:300,
  marginHorizontal:100,
  marginVertical:20,
   top:50,

 },
 button:{
  height:40,
top:90,
   borderWidth:2,
   borderColor:'black',
  width:300,
  color:'black',
  backgroundColor:'#DDDDDD',
  fontWeight:'bold',
   alignItems:'center',
  

 },
 
})