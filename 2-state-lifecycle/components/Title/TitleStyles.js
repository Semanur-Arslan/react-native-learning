import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Caveat-Bold",
  },
  total: {
    color: Colors.white,
    fontSize: 18,
  },
});
