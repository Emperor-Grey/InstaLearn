import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
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

  const [showOnBoarding, setShowOnBoarding] = useState(null);

  useEffect(() => {
    checkIfAlreadyOnBoarded();
  }, []);

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
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    );
  }

  if (showOnBoarding == null) {
    return null;
  }

  if (!isAuthenticated) {
    return <Welcome />;
  }

  return (
    <Stack.Navigator
      initialRouteName="BottomNav"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default MainNav;
