/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animated, {FadeInUp} from 'react-native-reanimated';

const Cart = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 82,
      }}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        entering={FadeInUp.duration(400).delay(500)}
        style={{flex: 1}}>
        <Text>Cart</Text>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
