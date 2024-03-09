import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animated, {FadeInDown, FadeOutUp} from 'react-native-reanimated';
import AppHeader from '../components/AppHeader';
import Explore from '../components/Explore';
import MyBanner from '../components/MyBanner';
import MySearchBar from '../components/MySearchBar';
import Recommended from '../components/Recommended';

const Home = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[style.container, {backgroundColor: theme.colors.background}]}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        exiting={FadeOutUp.duration(400).delay(500)}
        entering={FadeInDown.duration(400).delay(500)}>
        <AppHeader />
        <MySearchBar />
        <MyBanner />
        <Recommended />
        <Explore />
      </Animated.ScrollView>
      <ScrollView />
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
