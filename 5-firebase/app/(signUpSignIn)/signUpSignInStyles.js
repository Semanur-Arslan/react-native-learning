import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 24,
  },
  logoWrapper: {
    alignItems: "center",
    gap: 12,
  },
  logo: {},
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.primary,
    fontFamily: "CaveatMedium",
  },
  wrapper: {
    marginHorizontal: 24,
  },
});
