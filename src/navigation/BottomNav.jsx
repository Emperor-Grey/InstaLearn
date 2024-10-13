/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unstable-nested-components */
import { Book1, Home2, Profile, ShoppingCart } from 'iconsax-react-native';
import React, { useState } from 'react';
import { BottomNavigation, useTheme } from 'react-native-paper';

import CartScreen from '../screens/Pages/Cart';
import CourseScreen from '../screens/Pages/Course';
import HomeScreen from '../screens/Pages/Home';
import ProfileScreen from '../screens/Pages/Profile';

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
      key: 'course',
      title: 'Course',
      focusedIcon: () => (
        <Book1 size={24} color={useTheme().colors.primary} variant="Bold" />
      ),
      unfocusedIcon: () => (
        <Book1 size="24" color={useTheme().colors.primary} />
      ),
    },
    {
      key: 'cart',
      title: 'My Cart',
      focusedIcon: () => (
        <ShoppingCart
          size={24}
          color={useTheme().colors.primary}
          variant="Bold"
        />
      ),
      unfocusedIcon: () => (
        <ShoppingCart size="24" color={useTheme().colors.primary} />
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
    course: CourseScreen,
    cart: CartScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      compact={false}
    />
  );
};

export default BottomNav;
