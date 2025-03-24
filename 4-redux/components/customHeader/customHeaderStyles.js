import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  safeArea: {
    backgroundColor: "transparent",
  },
  header: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
    color: Colors.white,
  },
});
