import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../screens/Authentication/Login';
import Register from '../screens/Authentication/Register';
import Welcome from '../screens/Authentication/Welcome';
import Test from '../screens/Test';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? 'BottomNav' : 'WelcomeScreen'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
    </Stack.Navigator>
  );
};

export default MainNav;
