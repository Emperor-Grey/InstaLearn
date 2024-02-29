/* eslint-disable react/no-unstable-nested-components */
import {Heart, NotificationBing} from 'iconsax-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Text, useTheme} from 'react-native-paper';

const AppHeader = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        style.headerContainer,
        {backgroundColor: theme.colors.elevation.level2},
      ]}>
      <Appbar.Header style={{backgroundColor: theme.colors.elevation.level2}}>
        <Appbar.Content
          title={
            <>
              <Text
                variant="headlineLarge"
                style={[style.headerText, {color: theme.colors.onSurface}]}>
                Hello King!
              </Text>
              <Text variant="titleMedium" style={{color: theme.colors.text}}>
                Let's learn something today
              </Text>
            </>
          }
        />
        <Appbar.Action
          icon={() => (
            <NotificationBing
              size={31}
              color={theme.colors.primary}
              variant="Broken"
            />
          )}
          size={31}
          mode="contained-tonal"
          onPress={() => console.log('Notification Pressed')}
        />
        <Appbar.Action
          icon={() => (
            <Heart size={31} color={theme.colors.primary} variant="Broken" />
          )}
          size={31}
          mode="contained-tonal"
          onPress={() => console.log('Heart Pressed')}
        />
      </Appbar.Header>
    </View>
  );
};

export default AppHeader;

const style = StyleSheet.create({
  headerContainer: {
    paddingVertical: 22,
    paddingHorizontal: 5,
  },
  headerText: {
    fontStyle: 'italic',
    fontWeight: '600',
  },
});
