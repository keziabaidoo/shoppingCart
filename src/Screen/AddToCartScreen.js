import React, {Component} from 'react';
import {View,Text,TextInput,Button,Image,StyleSheet,TouchableOpacity} from 'react-native'
import {Entypo} from '@expo/vector-icons'


export default function AddToCartScreen({route,navigation}){
         console.log(route.params)
         const{newTitle}=route.params

        return(
            <View style={styles.container}>
                <View style={styles.onlineTextContainer}>
                   <Text style={styles.onlineText}>{newTitle}</Text>
                      <Text style={styles.inputText}>The growing popularity of the internet has given us a new way of shopping.
                           More and more business are offering their products online instead of standard stores. 
                    </Text>

                    <View style={styles.imageInfo}>
                        <Image source={require('../../assets/image2.png')} style={styles.imageText}/>
                    </View>

                    <View>
                   <TouchableOpacity onPress={()=>{
                       navigation.navigate("PaymentSuccessful")
                   }}style={styles.buttonContainer}>
                       <Text style={styles.buttonText}>Next</Text>
                   </TouchableOpacity>
               </View>
               <View style={styles.footer}>
                   <Entypo name='progress-two' size={50} style={styles.progressText}/>
    <TouchableOpacity style={styles.skipText} onPress={() => { 
        navigation.navigate('PaymentSuccessful') }}>
               <Text style={styles.skipColor}>Skip</Text>
    </TouchableOpacity>
             <TouchableOpacity onPress={()=>{
                 navigation.navigate('OnlineShopping')
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
       // backfaceVisibility:'visible' 
         
        
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
    previousColor:{
        color:'skyblue'
    },

    inputText:{
        textAlign:'justify',
        marginTop:10,
        fontSize:15,
        
        
    },

    skipColor:{
        color:'skyblue'
    },

    imageInfo:{
    marginVertical:30,
   // marginHorizontal:20,
    alignSelf:'center'

    },
    imageText:{
        height:200,
        width:200,
        

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

    skipText:{
        position:'absolute',
       right:0,
        
    },
    previousText:{
        color:'skyblue',
        position:'absolute',
        left:0
    }


})
