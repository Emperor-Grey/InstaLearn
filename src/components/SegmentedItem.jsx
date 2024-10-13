/* eslint-disable react-native/no-inline-styles */
import { EmptyWallet, Logout, TableDocument } from 'iconsax-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const SegmentedItem = ({ text, color, iconType }) => {
  const theme = useTheme();
  const renderIcon = () => {
    switch (iconType) {
      case 'EmptyWallet':
        return <EmptyWallet size={30} color={color} />;

      case 'LogOut':
        return <Logout size={30} color={color} />;

      case 'tableDocument':
      default:
        return <TableDocument size={30} color={color} />;
    }
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        padding: 14,
        justifyContent: 'center',
        borderRadius: 20,
      }}
    >
      {renderIcon()}
      <Text
        variant="labelMedium"
        style={{
          paddingTop: 8,
          color: theme.colors.onSurface,
          fontWeight: '600',
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default SegmentedItem;
