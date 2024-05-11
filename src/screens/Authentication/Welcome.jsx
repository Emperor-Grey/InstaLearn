import {useNavigation} from '@react-navigation/native';
import {Facebook, Google} from 'iconsax-react-native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, TouchableOpacity, View,} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../redux/reducers/AuthSlice';

const {width, height} = Dimensions.get('window');

const Welcome = () => {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const theme = useTheme();

    const handlePress = () => {
        const user = {id: 1, name: 'King Grey', password: '123456'};
        // nav.reset({
        //   index: 0
        //   routes: [{ name: 'BottomNav' }],
        // });
        dispatch(loginSuccess(user));
    };

    return (
        <SafeAreaView
            style={
                ([StyleSheet.container], {backgroundColor: theme.colors.background})
            }
        >
            <ScrollView>
                <View style={{padding: 16}}>
                    <Text variant="headlineLarge">InstaLearn</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <LottieView
                        source={require('../../../assets/Lottie/AceExams.json')}
                        loop
                        autoPlay
                        style={styles.lottie}
                    />
                </View>
                <View style={{paddingHorizontal: 12}}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontFamily: 'Inter-ExtraBold',
                            fontStyle: 'italic',
                            fontWeight: '700',
                        }}
                        variant="displaySmall"
                    >
                        Explore Opportunities
                    </Text>
                    <Text
                        variant="labelLarge"
                        style={{
                            textAlign: 'center',
                            marginTop: width / 16,
                            fontFamily: 'Inter-Medium',
                        }}
                    >
                        Discover endless learning possibilities and growth opportunities
                        with InstaLearn. Engage with a dynamic community, access exclusive
                        resources, and expand your horizons in pursuit of knowledge and
                        success.
                    </Text>
                    <Text
                        variant="titleLarge"
                        style={{
                            textAlign: 'center',
                            marginTop: 20,
                            fontSize: 16,
                            fontFamily: 'Inter-Bold',
                        }}
                    >
                        Join with
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        gap: 30,
                    }}
                >
                    <TouchableOpacity
                        onPress={handlePress}
                        style={{
                            backgroundColor: '#FAF5FF',
                            padding: 16,
                            borderRadius: 12,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: width * 0.4,
                            gap: 10,
                        }}
                    >
                        <Google size="24" color="black" variant="Bold"/>
                        <Text style={{fontWeight: 'bold', color: '#000'}}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handlePress}
                        style={{
                            backgroundColor: '#4267B2',
                            padding: 16,
                            borderRadius: 12,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: width * 0.4,
                            gap: 10,
                        }}
                    >
                        <Facebook size="24" color="#FFF" variant="Bold"/>
                        <Text style={{color: '#FFF'}}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center'}}>Or</Text>
                <TouchableOpacity
                    onPress={handlePress}
                    style={{
                        padding: 16,
                        paddingHorizontal: 24,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            backgroundColor: theme.colors.primary,
                            padding: 16,
                            textAlign: 'center',
                            color: theme.colors.background,
                            borderRadius: 12,
                            fontSize: 15,
                            fontFamily: 'Inter-Medium',
                        }}
                    >
                        Sign in
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Text>New to InstaLearn ? </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: theme.colors.primary,
                                fontFamily: 'Inter-ExtraBold',
                            }}
                        >
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lottie: {
        width: width * 0.9,
        height: width * 1.1,
    },
});
