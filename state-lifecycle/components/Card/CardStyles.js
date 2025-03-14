import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 12,
    borderRadius: 8,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
  },
  newText: {
    color: Colors.black,
  },
  doneText: {
    color: Colors.mediumGrey,
  },
});
