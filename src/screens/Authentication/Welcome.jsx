import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";

import AceSvg from "../../../assets/Svgs/ace.svg";
import StudySvg from "../../../assets/Svgs/study.svg";
import WelcomeSvg from "../../../assets/Svgs/welcome.svg";
import Paginator from "../../components/Paginator";
import Slide from "../../components/Slide";

const slides = [
  {
    id: 1,
    svg: WelcomeSvg,
    title: "Welcome to InstaLearn",
    subtext:
      "Embark on a journey of discovery and lifelong learning with InstaLearn. Whether you're a student, professional, or lifelong learner, our platform offers personalized learning experiences tailored to your needs.",
  },
  {
    id: 2,
    svg: StudySvg,
    title: "Study with us",
    subtext:
      "Dive deep into the world of knowledge and enhance your skills with our diverse range of courses. From academic subjects to practical skills, InstaLearn provides the resources and support you need to succeed.",
  },
  {
    id: 3,
    svg: AceSvg,
    title: "Exam Preparation",
    subtext:
      "Prepare with confidence for your upcoming exams using InstaLearn's proven study strategies and practice materials. Our comprehensive approach ensures you're fully equipped to excel and achieve your academic goals.",
  },
];

const Welcome = () => {
  const { width, height } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <FlatList
        data={slides}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={28}
        viewabilityConfig={viewConfig}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </SafeAreaView>
  );
};

export default Welcome;
