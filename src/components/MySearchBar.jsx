/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {SearchNormal} from 'iconsax-react-native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar, useTheme} from 'react-native-paper';

const MySearchBar = () => {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View
            style={[style.pad, {backgroundColor: theme.colors.elevation.level1}]}
        >
            <View
                style={[
                    style.container,
                    {backgroundColor: theme.colors.elevation.level3},
                ]}
            >
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    mode="bar"
                    style={{backgroundColor: 'transparent', padding: 0}}
                    clearButtonMode="while-editing"
                    clearTextOnFocus={true}
                    icon={() => <SearchNormal size={24} color={theme.colors.primary}/>}
                />
            </View>
        </View>
    );
};

export default MySearchBar;

const style = StyleSheet.create({
    container: {
        borderRadius: 16,
        padding: 2,
    },
    pad: {
        paddingHorizontal: 12,
        paddingBottom: 24,
    },
});
