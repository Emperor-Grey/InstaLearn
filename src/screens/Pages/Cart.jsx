/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animated, {FadeInUp} from 'react-native-reanimated';
import CustomHeader from '../../components/CustomHeader';

const Cart = () => {
    const theme = useTheme();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
            }}
        >
            <CustomHeader
                title={'My Cart'}
                elevation={theme.colors.elevation.level1}
                onSurface={theme.colors.onSurface}
                customIconType="Sort"
            />
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                entering={FadeInUp.duration(400).delay(500)}
                style={{flex: 1}}
            >
                <Text>Cart</Text>
            </Animated.ScrollView>
        </SafeAreaView>
    );
};

export default Cart;
