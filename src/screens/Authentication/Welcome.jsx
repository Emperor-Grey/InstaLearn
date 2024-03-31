import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const Welcome = () => {
  const theme = useTheme();
  //  const handleSignIn = () => {
  //   const user = { id: 1, username: 'example' }; // Replace with actual user data
  //   dispatch(loginSuccess(user));
  // };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;
