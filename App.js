import React from 'react';
import {  Text, View } from 'react-native';
import {NavigationContainer } from   '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import OnlineShoppingScreen from './src/Screen/OnlineShoppingScreen';
import AddToCartScreen from './src/Screen/AddToCartScreen';
import PaymentSuccessfulScreen from './src/Screen/PaymentSuccessfulScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
        
       <NavigationContainer>

         <Stack.Navigator 
            screenOptions={{
              title:'Shop-Ins',
              headerStyle:{
               backgroundColor:'skyblue'
              },
              headerTintColor:'white',
              headerTitleAlign:'center'

             }}
                >
           <Stack.Screen 
             // options={{
            name="OnlineShopping" 
            component={OnlineShoppingScreen} />
           <Stack.Screen name="AddToCart" component={AddToCartScreen} />
           <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessfulScreen} />
           
         </Stack.Navigator>

       </NavigationContainer>
    
  );
}


