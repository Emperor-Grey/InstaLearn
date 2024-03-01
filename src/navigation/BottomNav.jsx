/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unstable-nested-components */
import {Home2, I24Support, Profile, SearchNormal1} from 'iconsax-react-native';
import React, {useState} from 'react';
import {BottomNavigation, useTheme} from 'react-native-paper';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
import SupportScreen from '../screens/Support';

const BottomNav = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: () => (
        <Home2 size={24} color={useTheme().colors.primary} variant="Bold" />
      ),
      unfocusedIcon: () => (
        <Home2
          ke
          size="24"
          color={useTheme().colors.primary}
          variant="Outline"
        />
      ),
    },
    {
      key: 'search',
      title: 'Search',
      focusedIcon: () => (
        <SearchNormal1
          size={24}
          color={useTheme().colors.primary}
          variant="Bold"
        />
      ),
      unfocusedIcon: () => (
        <SearchNormal1 size="24" color={useTheme().colors.primary} />
      ),
    },
    {
      key: 'support',
      title: 'Support',
      focusedIcon: () => (
        <I24Support
          size={24}
          color={useTheme().colors.primary}
          variant="Bold"
        />
      ),
      unfocusedIcon: () => (
        <I24Support size="24" color={useTheme().colors.primary} />
      ),
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: () => (
        <Profile size={24} color={useTheme().colors.primary} variant="Bold" />
      ),
      unfocusedIcon: () => (
        <Profile size="24" color={useTheme().colors.primary} />
      ),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    search: SearchScreen,
    support: SupportScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      compact={false}
    />
  );
};

export default BottomNav;
