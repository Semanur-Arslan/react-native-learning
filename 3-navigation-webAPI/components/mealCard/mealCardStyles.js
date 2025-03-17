import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { Dimensions } from "react-native";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  background: {
    height: screen.height / 4.5,
    marginVertical: 8,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    overflow: "hidden",
    borderRadius: 16,
    resizeMode: "contain",
  },
  body: {
    width: screen.width - 24,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 12,
  },
  title: {
    textAlign: "right",
    color: Colors.white,
    fontSize: 20,
    fontWeight: "500",
  },
});
