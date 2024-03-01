/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {SearchNormal} from 'iconsax-react-native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Searchbar, useTheme} from 'react-native-paper';
import AppHeader from '../components/AppHeader';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[style.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView>
        <AppHeader />
        <View style={{padding: 10}}>
          <View
            style={{
              backgroundColor: theme.colors.elevation.level3,
              borderRadius: 15,
              padding: 2.5,
            }}>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              mode="bar"
              style={{backgroundColor: 'transparent', padding: 0}}
              clearButtonMode="while-editing"
              clearTextOnFocus={true}
              icon={() => (
                <SearchNormal size={24} color={theme.colors.primary} />
              )}
            />
          </View>
        </View>
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
