import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    marginVertical: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderTopLeftRadius: 52,
    borderBottomLeftRadius: 52,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  img: {
    width: 64,
    height: 64,
    resizeMode: "contain",
    marginEnd: 8,
  },
  title: {
    color: Colors.black,
    fontSize: 16,
  },
});
