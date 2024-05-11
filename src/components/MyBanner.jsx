/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Banner, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
    selectBannerVisibility,
    setBannerVisibility,
} from '../redux/reducers/bannerSlice';

const MyBanner = () => {
    const isVisible = useSelector(selectBannerVisibility);
    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(setBannerVisibility(false));
    };

    return (
        <>
            {isVisible !== undefined && (
                <Banner
                    visible={isVisible}
                    style={{paddingHorizontal: 12}}
                    actions={[{label: "Let's Learn", onPress: handlePress}]}
                >
                    <Text variant="labelLarge" style={{fontSize: 16}}>
                        We offer high-quality learning materials to streamline and expedite
                        your educational journey.
                    </Text>
                </Banner>
            )}
        </>
    );
};

export default MyBanner;
