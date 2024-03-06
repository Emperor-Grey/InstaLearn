/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

const Cart = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text>Cart</Text>
    </SafeAreaView>
  );
};

export default Cart;
