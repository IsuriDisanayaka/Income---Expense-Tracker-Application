import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginPage from './Component/LoginPage'
import SignUp from './Component/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import dashBoard from './Component/dashBoard';
import welcome from './Component/welcome'
const Stack = createStackNavigator();


export default class App extends Component {
  render() {
    return (
      
      <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen name="Hello!" component={welcome} />
        <Stack.Screen name="Sign In" component={LoginPage} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Dash Board" component={dashBoard}/>
        

        </Stack.Navigator>
  
    </NavigationContainer>
    )
  }
}
