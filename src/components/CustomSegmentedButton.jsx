/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import SegmentedItem from './SegmentedItem';

const CustomSegmentedButton = props => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderRadius: 16,
        marginTop: 12,
        backgroundColor: props.colors.elevation.level2,
      }}>
      <TouchableOpacity onPress={() => {}}>
        <SegmentedItem
          color={props.colors.primary}
          text={'My Order'}
          iconType={'tableDocument'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <SegmentedItem
          color={props.colors.primary}
          text={'Payment'}
          iconType={'EmptyWallet'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <SegmentedItem
          color={props.colors.primary}
          text={'Location'}
          iconType={'Location'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomSegmentedButton;
