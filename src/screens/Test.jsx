/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Switch, useTheme } from 'react-native-paper';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTheme, setTheme } from '../redux/reducers/themeSlice';

const Test = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);

  const toggleGreenApple = () => {
    if (currentTheme !== 'GreenApple') {
      dispatch(setTheme('GreenApple'));
    }
  };

  const toggleBanana = () => {
    if (currentTheme !== 'Banana') {
      dispatch(setTheme('Banana'));
    }
  };

  const toggleGrape = () => {
    if (currentTheme !== 'GrapeSoda') {
      dispatch(setTheme('GrapeSoda'));
    }
  };

  const toggleOff = () => {
    if (currentTheme !== 'Default') {
      dispatch(setTheme('Default'));
    }
  };

  return (
    <Animated.View
      entering={FadeInUp.duration(400).delay(500)}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={{ color: theme.colors.onBackground }}>Hello from Dev</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ marginRight: 10, color: theme.colors.onBackground }}>
          Green Apple
        </Text>
        <Switch
          value={currentTheme === 'GreenApple'}
          onValueChange={toggleGreenApple}
          color={theme.colors.primary}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ marginRight: 10, color: theme.colors.onBackground }}>
          Banana Bread
        </Text>
        <Switch
          value={currentTheme === 'Banana'}
          onValueChange={toggleBanana}
          color={theme.colors.primary}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ marginRight: 10, color: theme.colors.onBackground }}>
          Grape Soda
        </Text>
        <Switch
          value={currentTheme === 'GrapeSoda'}
          onValueChange={toggleGrape}
          color={theme.colors.primary}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ marginRight: 10, color: theme.colors.onBackground }}>
          Blue Sapphire
        </Text>
        <Switch
          value={currentTheme === 'Default'}
          onValueChange={toggleOff}
          color={theme.colors.primary}
        />
      </View>
      <Button onPress={toggleOff} style={{ marginTop: 20 }}>
        Toggle Off
      </Button>
    </Animated.View>
  );
};

export default Test;
