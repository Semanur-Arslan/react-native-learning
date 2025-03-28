import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  inputWrapper: {
    marginVertical: 8,
  },
  input: {
    borderColor: Colors.tertiary,
    borderBottomWidth: "1.5",
    padding: 4,
    fontSize: 16,
  },
  toggleButton: {
    position: "absolute",
    right: 2,
    bottom: 4,
  },
  errorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  errorText: {
    color: Colors.danger,
    fontSize: 14,
  },
});
