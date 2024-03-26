import { View, useWindowDimensions } from "react-native";
import { Text, useTheme } from "react-native-paper";

const Slide = ({ item }) => {
  const SvgComponent = item.svg;
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 44,
      }}
    >
      <SvgComponent
        width={width}
        height={height * 0.4}
        fill={theme.colors.primary}
        stroke={"transparent"}
      />
      <View
        style={{ justifyContent: "center", alignItems: "center", height: 100 }}
      >
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: "bold",
            fontSize: 22,
            fontFamily: "Inter-Regular",
            color: "black",
            marginBottom: 10,
          }}
        >
          {item.title}
        </Text>
        <Text
          variant="bodySmall"
          style={{
            width: width,
            textAlign: "center",
            padding: 10,
            color: "#000",
          }}
        >
          {item.subtext}
        </Text>
      </View>
    </View>
  );
};
export default Slide;
