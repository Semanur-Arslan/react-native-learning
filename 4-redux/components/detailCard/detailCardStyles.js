import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 12,
    marginVertical: 12,
    marginHorizontal: 8,
    borderRadius: 12,
    gap: 12,
  },
  nameWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
    gap: 4,
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
    width: "90%",
    overflow: "hidden",
  },
  wrapper: {
    flexDirection: "row",
    gap: 12,
  },
  title: {
    color: Colors.primary,
  },
  company: {
    color: Colors.lightBlack,
    fontWeight: "400",
    fontSize: 16,
  },
  contentWrapper: {
    marginVertical: 24,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderColor: Colors.gray,
  },
});
