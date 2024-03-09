/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {ArrowRight3, Profile} from 'iconsax-react-native';
import React from 'react';
import {View} from 'react-native';
import {Icon, Text, useTheme} from 'react-native-paper';

const SettingsItem = ({icon, label}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 30,
        }}>
        <View
          style={{
            backgroundColor: theme.colors.elevation.level5,
            padding: 12,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            color={theme.colors.primary}
            source={({size, color}) => <Profile color={color} size={size} />}
            size={24}
          />
        </View>
        <Text variant="titleMedium" style={{fontSize: 18}}>
          {label}
        </Text>
      </View>
      {/* <Text>Arrow</Text> */}
      <Icon
        color={theme.colors.primary}
        source={({size, color}) => <ArrowRight3 color={color} size={size} />}
        size={24}
      />
    </View>
  );
};

export default SettingsItem;
