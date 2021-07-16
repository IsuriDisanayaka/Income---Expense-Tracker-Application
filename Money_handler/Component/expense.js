import React, { Component } from 'react'
import { ScrollView ,Alert,Text,TouchableOpacity ,StyleSheet} from 'react-native'
import{ Form,Item,Label,Input} from 'native-base'

export default class expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:'',
      category:'',
      amount:'',
      note:'',
    };
  }

  clearText = () => {
    this.setState({ date: '' })
    this.setState({ category: '' })
    this.setState({ amount: '' })
    this.setState({ note: '' })
}
    render() {
        return (
            <ScrollView style={styles.scrollView}>
      <Form>
            <Item floatingLabel>
              <Label style={{fontWeight:'bold'}}>Date</Label>
              <Input 
               onChangeText={(value) => this.setState({ date: value })}
               value={this.state.date}
              />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontWeight:'bold'}}>Category</Label>
              <Input 
               onChangeText={(value) => this.setState({ category: value })}
               value={this.state.category}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontWeight:'bold'}}>Amount</Label>
              <Input
                onChangeText={(value) => this.setState({ amount: value })}
                value={this.state.amount}
               />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontWeight:'bold'}}>Note</Label>
              <Input
              onChangeText={(value) => this.setState({ note: value })}
              value={this.state.note}

               />
            </Item>
          </Form>
          <TouchableOpacity   

onPress={() => {
  fetch("http://192.168.1.101:3000/ExpenseRoute", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
         date: this.state.date,
        category: this.state.category,
        amount: this.state.amount,
        note:this.state.note,
      })
     
  })
      .then((response) => response.json())
      .then((json) => {
        if (json) {
            Alert.alert(
                "Added Successfully",
               
            );
            this.clearText()
        }
    })
    .catch((error) => {
        Alert.alert(
        
            "Please enter Valid Details",
          
        );
      console.log("eror")
    })
}
}



          
          
          
          
          
          
          style={styles.button}
       
   
     >
        <Text style={{color:'#f5f6fa',left:130,fontWeight:'bold',fontSize:22}}>Save</Text>
      </TouchableOpacity>

      </ScrollView>
        )}}


        const styles = StyleSheet.create({
        
            scrollView: {
              backgroundColor: '#ffff',
              marginHorizontal: 20,
            },
            button:{
                backgroundColor:'#2c3e50',
                width:300,
                height:40,
                top:50,
                height:90,
                left:20
            }
        })