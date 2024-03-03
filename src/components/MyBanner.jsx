/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Banner, Text} from 'react-native-paper';

const MyBanner = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Banner
      visible={visible}
      style={{paddingHorizontal: 12}}
      actions={[
        {
          label: "Let's Learn",
          onPress: () => setVisible(false),
        },
      ]}>
      <Text variant="labelLarge" style={{fontSize: 16}}>
        We offer high-quality learning materials to streamline and expedite your
        educational journey.
      </Text>
    </Banner>
  );
};

export default MyBanner;
