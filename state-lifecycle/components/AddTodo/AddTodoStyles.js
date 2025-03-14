import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    margin: 12,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 52,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGrey,
    padding: 8,
    marginBottom: 16,
  },
});
