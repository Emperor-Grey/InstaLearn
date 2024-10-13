import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import BottomNav from '../navigation/BottomNav';
import Login from '../screens/Authentication/Login';
import OnBoardingScreen from '../screens/Authentication/OnBoardingScreen';
import Register from '../screens/Authentication/Register';
import Welcome from '../screens/Authentication/Welcome';
import Test from '../screens/Test';
import { getItem } from '../utils/AsyncStorage';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const theme = useTheme();
  const [showOnBoarding, setShowOnBoarding] = useState(null);

  useEffect(() => {
    checkIfAlreadyOnBoarded();
  }, [isAuthenticated]);

  const checkIfAlreadyOnBoarded = async () => {
    try {
      let onBoarded = await getItem('onBoarded');
      if (onBoarded == 1) {
        setShowOnBoarding(false);
      } else {
        setShowOnBoarding(true);
      }
    } catch (error) {
      console.error('Error checking onboarding status:', error);
    }
  };

  if (showOnBoarding) {
    return (
      <Stack.Navigator
        initialRouteName="OnBoardingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />
      </Stack.Navigator>
    );
  }

  if (showOnBoarding == null) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
        <Welcome />
      </View>
    );
  } else {
    return (
      <Stack.Navigator
        initialRouteName="BottomNav"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    );
  }
};

export default MainNav;
