import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  message: {
    color: Colors.light.text,
    fontSize: 14,
  },
  linkText: {
    color: Colors.secondary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
