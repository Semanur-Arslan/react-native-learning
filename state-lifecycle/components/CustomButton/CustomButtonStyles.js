import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "semibold",
    color: Colors.white,
  },
});
