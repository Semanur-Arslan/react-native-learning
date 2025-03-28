import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 12,
  },
  text: {
    color: Colors.dark.text,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
