import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {useTheme} from 'react-native-paper';
import Browse from '../screens/Tabs/Browse';
import Owned from '../screens/Tabs/Owned';

const Tab = createMaterialTopTabNavigator();

const TabNav = () => {
    const theme = useTheme();
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={{
                animationEnabled: true,
                tabBarIndicator: () => null,
                tabBarBounces: true,
                tabBarAndroidRipple: {borderless: true},
                tabBarInactiveTintColor: theme.colors.onSurfaceDisabled,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarContentContainerStyle: {
                    backgroundColor: theme.colors.elevation.level2,
                },
                tabBarLabelStyle: {
                    textTransform: 'none',
                    fontSize: 14,
                    fontFamily: 'Inter-Regular',
                },
            }}
        >
            <Tab.Screen name="Explore" component={Browse}/>
            <Tab.Screen name="My Courses" component={Owned}/>
        </Tab.Navigator>
    );
};

export default TabNav;
