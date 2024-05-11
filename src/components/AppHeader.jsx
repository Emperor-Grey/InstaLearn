/* eslint-disable react/no-unstable-nested-components */
import {Heart, NotificationBing} from 'iconsax-react-native';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Appbar, Text, Tooltip, useTheme} from 'react-native-paper';

const AppHeader = () => {
    const theme = useTheme();
    return (
        <View
            style={[
                style.headerContainer,
                {backgroundColor: theme.colors.elevation.level1},
            ]}
        >
            <Appbar.Header style={{backgroundColor: theme.colors.elevation.level1}}>
                <Appbar.Content
                    title={
                        <>
                            <Text
                                variant="headlineLarge"
                                style={[style.headerText, {color: theme.colors.onSurface}]}
                            >
                                Hello King!
                            </Text>
                            <Text
                                variant="titleMedium"
                                style={{color: theme.colors.onSurfaceDisabled}}
                            >
                                Let's learn something today
                            </Text>
                        </>
                    }
                />
                <Tooltip title="Notification">
                    <Appbar.Action
                        icon={() => (
                            <NotificationBing
                                size={29}
                                color={theme.colors.primary}
                                variant="Broken"
                            />
                        )}
                        size={29}
                        mode="contained-tonal"
                        onPress={() => {
                        }}
                    />
                </Tooltip>

                <Tooltip title="Favorites">
                    <Appbar.Action
                        icon={() => (
                            <Heart size={29} color={theme.colors.primary} variant="Broken"/>
                        )}
                        size={29}
                        mode="contained-tonal"
                        onPress={() => {
                        }}
                    />
                </Tooltip>
            </Appbar.Header>
        </View>
    );
};

export default AppHeader;

const style = StyleSheet.create({
    headerContainer: {
        paddingVertical: 18,
        paddingTop: Platform.Version > 33 ? 0 : 30,
        paddingHorizontal: 5,
    },
    headerText: {
        fontStyle: 'italic',
        fontWeight: '600',
    },
});
