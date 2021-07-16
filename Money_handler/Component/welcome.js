import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,StyleSheet} from 'react-native'

export default class welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                   onPress={()=>{
                    this.props.navigation.navigate('Sign In')
                }}  
                >
                <Text style={styles.text}>WELCOME </Text>
         
         <Image
                    source={require('../assets/images.png')}
                    style={{width:300, height:300,marginHorizontal:100,
                        marginVertical:100,}}
                />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
         backgroundColor:'#ffff',
         alignItems:'center',
         justifyContent:'center',
      
    },
    text:{
        color:'#7A4210',
    fontSize: 40,
    fontFamily:'arial',
    fontWeight: 'bold',
    marginHorizontal:100,
    marginVertical:100,
    }
})