import React from 'react';
import { Text, View } from 'react-native';

const Welcome = () => {
  //  const handleSignIn = () => {
  //   // Perform your sign-in logic here
  //   // For example, after successful sign-in:
  //   const user = { id: 1, username: 'example' }; // Replace with actual user data
  //   dispatch(loginSuccess(user));
  // };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Welcome</Text>
    </View>
  );
};

export default Welcome;
