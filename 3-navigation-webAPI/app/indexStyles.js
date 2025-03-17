import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    width: screen.width,
    height: screen.height / 1.8,
  },
  logo: {
    fontFamily: "Caveat-Bold",
    fontSize: 52,
    textAlign: "center",
    paddingVertical: 36,
  },

  orangeText: {
    color: Colors.primary,
  },
  blackText: {
    color: Colors.black,
  },

  body: {
    paddingHorizontal: 12,
    paddingVertical: 48,
  },

  title: {
    fontSize: 24,
    fontWeight: "400",
    paddingBottom: 18,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
});
