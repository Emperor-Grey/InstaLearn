/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';
import CustomHeader from '../components/CustomHeader';
import TabNav from '../navigation/TabNav';

const Course = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <CustomHeader
        title={'Courses'}
        elevation={theme.colors.elevation.level1}
        onSurface={theme.colors.onSurface}
        customIconType="More"
      />
      <TabNav />
    </SafeAreaView>
  );
};

export default Course;
