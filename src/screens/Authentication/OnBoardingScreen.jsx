import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {setItem} from '../../utils/AsyncStorage';

const {width, height} = Dimensions.get('window');

const OnBoardingScreen = () => {
    const nav = useNavigation();

    const handleDone = async () => {
        nav.navigate('WelcomeScreen');
        await setItem('onBoarded', '1');
    };

    const doneButton = (...props) => {
        return (
            <TouchableOpacity style={styles.doneBtn} onPress={handleDone} {...props}>
                <Text
                    style={{
                        fontFamily: 'Inter-Regular',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}
                >
                    Done
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex: 1}}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                bottomBarHighlight={false}
                transitionAnimationDuration={300}
                bottomBarHeight={width * 0.2}
                controlStatusBar={false}
                DoneButtonComponent={doneButton}
                titleStyles={{
                    fontFamily: 'Inter-Bold',
                    fontWeight: '700',
                    fontStyle: 'italic',
                }}
                subTitleStyles={{
                    fontFamily: 'Inter-Medium',
                    fontWeight: '600',
                    fontStyle: 'normal',
                }}
                containerStyles={{paddingHorizontal: 12}}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View>
                                <LottieView
                                    style={styles.Lottie}
                                    source={require('../../../assets/Lottie/Welcome.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Welcome to InstaLearn',
                        subtitle:
                            "Embark on a journey of discovery and lifelong learning with InstaLearn. Whether you're a student, professional, or lifelong learner, our platform offers personalized learning experiences tailored to your needs.",
                    },
                    {
                        backgroundColor: '#fef3ce',
                        image: (
                            <View>
                                <LottieView
                                    style={styles.Lottie}
                                    source={require('../../../assets/Lottie/StudyWithUs.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Study with us',
                        subtitle:
                            'Dive deep into the world of knowledge and enhance your skills with our diverse range of courses. From academic subjects to practical skills, InstaLearn provides the resources and support you need to succeed.',
                    },
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <View>
                                <LottieView
                                    style={styles.Lottie}
                                    source={require('../../../assets/Lottie/AceExams.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Exam Preparation',
                        subtitle:
                            "Prepare with confidence for your upcoming exams using InstaLearn's proven study strategies and practice materials. Our comprehensive approach ensures you're fully equipped to excel and achieve your academic goals.",
                    },
                ]}
            />
        </View>
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    Lottie: {
        height: width,
        width: width * 0.9,
    },
    doneBtn: {
        padding: 20,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
    },
});
