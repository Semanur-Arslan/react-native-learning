import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 4,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: Colors.background,
  },
});
