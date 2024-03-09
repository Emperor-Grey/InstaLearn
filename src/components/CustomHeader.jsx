import {More, Sort, UserEdit} from 'iconsax-react-native';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Appbar, Text, useTheme} from 'react-native-paper';
import Animated, {FadeInUp} from 'react-native-reanimated';

const CustomHeader = ({title, elevation, onSurface, customIconType}) => {
  const theme = useTheme();
  const renderIcon = (color, size) => {
    switch (customIconType) {
      case 'UserEdit':
        return <UserEdit size={size} color={color} />;

      case 'More':
        return <More size={size} color={color} />;

      case 'Sort':
        return <Sort size={size} color={color} />;

      default:
        return <UserEdit size={size} color={color} />;
    }
  };

  return (
    <Animated.View
      entering={FadeInUp.duration(400).delay(700)}
      style={[
        style.headerContainer,
        {
          backgroundColor: elevation,
        },
      ]}>
      <Appbar.Header
        style={{
          backgroundColor: elevation,
        }}
        mode="small">
        <Appbar.Content
          title={
            <Text
              variant="headlineLarge"
              style={[
                style.headerText,
                {
                  color: onSurface,
                },
              ]}>
              {title}
            </Text>
          }
        />
        <Appbar.Action
          icon={({color, size}) => renderIcon(color, size)}
          onPress={() => {}}
          size={28}
          color={theme.colors.primary}
        />
      </Appbar.Header>
    </Animated.View>
  );
};

export default CustomHeader;

const style = StyleSheet.create({
  headerContainer: {
    paddingVertical: 4,
    paddingTop: Platform.Version > 33 ? 0 : 30,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  headerText: {
    fontStyle: 'italic',
    fontWeight: '600',
  },
});
