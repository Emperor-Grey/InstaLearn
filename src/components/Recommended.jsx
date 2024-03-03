/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Avatar, Card, Text, useTheme} from 'react-native-paper';

const data = [
  {
    image: '',
    name: 'Lead Dev',
    work: 'App Dev',
  },
  {
    image: '',
    name: 'Sripathi',
    work: 'Promoter',
  },
  {
    image: '',
    name: 'Hari',
    work: 'Image Designer',
  },
  {
    image: '',
    name: 'Hitesh',
    work: 'Database',
  },

  {
    image: '',
    name: 'Ravanth',
    work: 'Testing',
  },
];

const Recommended = () => {
  const theme = useTheme();
  const renderItem = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
      }}>
      <Avatar.Image
        size={76}
        style={{backgroundColor: theme.colors.elevation.level5}}
        source={{uri: item.image}}
      />
      <Text variant="labelLarge" style={{fontSize: 18, marginTop: 8}}>
        {item.name}
      </Text>
      <Text variant="labelMedium">{item.work}</Text>
    </View>
  );

  return (
    <View>
      <View style={style.container}>
        <Text variant="titleMedium" style={{fontSize: 24}}>
          Recommended Course
        </Text>
        <View style={{paddingVertical: 10}}>
          <Card
            elevation={1}
            mode="elevated"
            style={{
              minHeight: 200,
              minWidth: '100%',
              padding: 10,
            }}
          />
        </View>
        <Text variant="labelLarge" style={{fontSize: 20, marginTop: 10}}>
          Top Contributors
        </Text>
      </View>
      {/* The Top Contributors Section  */}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Recommended;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
