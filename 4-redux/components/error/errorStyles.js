import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 2,
  },
  image: {
    height: screen.height / 2.5,
    resizeMode: "contain",
  },
  wrapper: {
    height: screen.height / 2,
    alignItems: "center",

    gap: 36,
  },
  errorCode: {
    fontSize: 36,
    fontWeight: "800",
    color: Colors.primary,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
