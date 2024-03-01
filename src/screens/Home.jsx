import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import AppHeader from '../components/AppHeader';
import MySearchBar from '../components/MySearchBar';
import Recommended from '../components/Recommended';

const Home = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[style.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView>
        <AppHeader />
        <MySearchBar />
        <Recommended />
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
