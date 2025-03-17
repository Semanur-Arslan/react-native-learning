import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  img: {
    width: screen.width,
    height: screen.height / 2.5,
  },
  titleBody: {
    paddingVertical: 18,
    marginHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  area: {
    fontSize: 16,
    textAlign: "right",
    fontStyle: "italic",
  },
  body: {
    paddingBottom: 32,
    paddingHorizontal: 12,
  },
  description: {
    padding: 12,
    fontSize: 14,
  },
});
