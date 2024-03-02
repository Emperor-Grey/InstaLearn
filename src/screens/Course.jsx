import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useTheme} from 'react-native-paper';

const Course = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.background}}>
      <Text>Course</Text>
    </SafeAreaView>
  );
};

export default Course;
