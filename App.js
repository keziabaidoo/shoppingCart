import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShoppingScreen from './Component/OnlineShoppingScreen';
import AddToCartScreen from './Component/AddToCartScreen'
import PaymentSuccessfulScreen from './Component/PaymentSuccessfulScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<OnlineShoppingScreen/>*/}
      {/*<AddToCartScreen/>*/}
      <PaymentSuccessfulScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});
