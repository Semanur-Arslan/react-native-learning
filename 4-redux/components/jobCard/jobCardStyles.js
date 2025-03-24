import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 18,
    flex: 1,
    gap: 12,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
    gap: 4,
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
    width: "90%",
    overflow: "hidden",
  },
  company: {
    color: Colors.lightBlack,
    fontWeight: "400",
    width: "70%",
    overflow: "hidden",
  },
  date: {
    color: Colors.lightBlack,
    fontWeight: "400",
    width: "30%",
    overflow: "hidden",
    textAlign: "right",
  },
  location: {
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 6,
  },
  locationText: {
    color: Colors.primary,
    fontWeight: "600",
  },
  levelWrapper: {
    alignItems: "flex-end",
  },
  levelText: {
    color: Colors.primary,
    fontWeight: "600",
    textAlign: "right",
  },
});
