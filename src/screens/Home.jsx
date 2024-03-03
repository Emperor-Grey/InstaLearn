import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader />
        <MySearchBar />
        <MyBanner />
        <Recommended />
        <Explore />
      </ScrollView>
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
