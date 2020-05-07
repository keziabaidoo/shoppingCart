import React, {Component} from 'react';
import {View,Text,TextInput,Button,Image,StyleSheet,TouchableOpacity} from 'react-native'
import {Entypo} from '@expo/vector-icons'
import AddToCartScreen from './AddToCartScreen';


export default function PaymentSuccessfulScreen({navigation}){

        return(
            <View style={styles.container}>
                <View style={styles.onlineTextContainer}>
                    <Text style={styles.onlineText}>PAYMENT SUCCESSFUL</Text>
                      <Text style={styles.inputText}>The growing popularity of the internet has given us a new way of shopping.
                           More and more business are offering their products online instead of standard stores. 
                    </Text>

                    <View style={styles.imageInfo}>
                        <Image source={require('../../assets/image3.png')} style={styles.imageText}/>
                    </View>

                   <TouchableOpacity onPress={()=>{
                       navigation.navigate('OnlineShopping')
                   }}
                   style={styles.buttonContainer}>
                       <Text style={styles.buttonText}>Get Started</Text>
                   </TouchableOpacity>
               
               <View style={styles.footer}>
                   <Entypo name='progress-full' size={50} style={styles.progressText}/>
                   <TouchableOpacity onPress={()=>{
                       navigation.navigate('AddToCart')
                   }}
                   style={styles.previousText}>
                   <Text style={styles.previousColor}>Previous</Text>
                   </TouchableOpacity>
                   
               </View>
                </View>

            </View>
        )
    }








const styles=StyleSheet.create({
    container:{
        marginHorizontal:40,      
        
    },
    onlineTextContainer:{
        marginTop:5,
        
        
    },
    onlineText:{
        fontSize:16,
        fontWeight:'bold',
        color:'skyblue',
        alignItems:'center',
        alignSelf:'center',
        marginTop:10
    },
    inputText:{
        textAlign:'justify',
        marginTop:10,
        fontSize:15,
          
    },

    imageInfo:{
    marginVertical:30,
    alignSelf:'center'

    },
    imageText:{
        height:200,
        width:200
    },
    buttonContainer:{
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:30,
        marginTop:10,
        backgroundColor:'skyblue',
       
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:20
        
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:40
    },
    progressText:{
        marginLeft:100,
        color:'skyblue'
    },
    previousColor:{
         color:'skyblue'
    },

    previousText:{
        color:'skyblue',
        position:'absolute',
        left:0
    }


})

