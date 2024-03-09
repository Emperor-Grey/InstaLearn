/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {More} from 'iconsax-react-native';
import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import {Appbar, Text, useTheme} from 'react-native-paper';
import Animated, {FadeInUp} from 'react-native-reanimated';
import TabNav from '../navigation/TabNav';

const Course = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Animated.View
        entering={FadeInUp.duration(400).delay(500)}
        style={[
          style.headerContainer,
          {backgroundColor: theme.colors.elevation.level1},
        ]}>
        <Appbar.Header style={{backgroundColor: theme.colors.elevation.level1}}>
          <Appbar.Content
            title={
              <Text
                variant="headlineLarge"
                style={[style.headerText, {color: theme.colors.onSurface}]}>
                Courses
              </Text>
            }
          />
          <Appbar.Action
            icon={({color, size}) => (
              <More size={size} color={color} rotation={90} />
            )}
            onPress={() => {}}
          />
        </Appbar.Header>
      </Animated.View>
      <TabNav />
    </SafeAreaView>
  );
};

export default Course;

const style = StyleSheet.create({
  headerContainer: {
    paddingVertical: 8,
    paddingTop: Platform.Version > 33 ? 0 : 30,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  headerText: {
    fontStyle: 'italic',
    fontWeight: '600',
  },
});
