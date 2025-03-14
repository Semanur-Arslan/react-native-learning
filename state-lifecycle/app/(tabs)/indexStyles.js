import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listWrapper: {
    height: Dimensions.get("window").height / 1.5,
  },
  list: {
    marginVertical: 24,
  },
  wrapper: {
    flexDirection: "column",
  },
  firstMessage: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.lightDark,
  },
  img: {
    width: Dimensions.get("window").width,
    padding: 24,
  },
});
