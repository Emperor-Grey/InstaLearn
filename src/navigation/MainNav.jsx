import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Test from '../screens/Test';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default MainNav;
