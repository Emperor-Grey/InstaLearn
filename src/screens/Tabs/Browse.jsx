/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Browse = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Animated.ScrollView
        entering={FadeInDown.duration(400).delay(500)}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={{ flex: 1 }}
      >
        <Text>Browse</Text>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Browse;
