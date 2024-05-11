/* eslint-disable react-native/no-inline-styles */

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, View} from 'react-native';
import {Avatar, Text, useTheme} from 'react-native-paper';
import Animated, {FadeInDown} from 'react-native-reanimated';
import CustomHeader from '../../components/CustomHeader';
import CustomSegmentedButton from '../../components/CustomSegmentedButton';
import SettingsItem from '../../components/SettingsItem';

function SettingsGroup(props) {
    const nav = useNavigation();
    return (
        <View
            style={{
                backgroundColor: props.level1,
                borderRadius: 12,
                padding: 16,
            }}
        >
            <Pressable onPress={() => {
            }}>
                <SettingsItem icon={'Profile'} label={'User Details'}/>
            </Pressable>
            <Pressable
                onPress={() => {
                    nav.navigate('Test');
                }}
            >
                <SettingsItem icon={'Setting2'} label={'Settings'}/>
            </Pressable>
            <Pressable onPress={() => {
            }}>
                <SettingsItem icon={'Messages2'} label={'Help & Support'}/>
            </Pressable>
            <Pressable onPress={() => {
            }}>
                <SettingsItem icon={'LanguageSquare'} label={'Change Language'}/>
            </Pressable>
        </View>
    );
}

const Course = () => {
    const theme = useTheme();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
            <Animated.ScrollView
                entering={FadeInDown.duration(400).delay(500)}
                style={{flex: 1}}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
                alwaysBounceVertical
            >
                <CustomHeader
                    title={'Profile'}
                    elevation={theme.colors.elevation.level1}
                    onSurface={theme.colors.onSurface}
                    customIconType="UserEdit"
                />
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View style={{flex: 1, alignItems: 'center', padding: 24}}>
                        <Avatar.Image
                            size={140}
                            source={{
                                uri: 'https://i.pinimg.com/736x/a7/96/e9/a796e9b1fdd519489599cb7a238fa6bc.jpg',
                            }}
                        />
                        <View
                            style={{
                                paddingVertical: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                variant="labelLarge"
                                style={{fontSize: 28, paddingTop: 12}}
                            >
                                King Grey
                            </Text>
                            <Text variant="titleMedium" style={{padding: 8}}>
                                @Kinggrey
                            </Text>
                        </View>
                        {/* The Background Filled Orders,Payments,Location thing */}
                        <CustomSegmentedButton colors={theme.colors}/>
                    </View>
                </View>
                <View style={{paddingHorizontal: 16}}>
                    {/* <Text variant="headlineSmall">Settings</Text> */}
                    <View style={{paddingTop: 16}}>
                        <SettingsGroup level1={theme.colors.elevation.level1}/>
                    </View>
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
};

export default Course;
