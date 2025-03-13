import { StyleSheet, Platform } from "react-native";
import { Colors } from "@/constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    color: Colors.primary,
    paddingTop: Platform.OS === "android" ? 32 : 0,
  },
  search_bar: {
    margin: 12,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 12,
    padding: 12,
    backgroundColor: Colors.secondary,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  list_container: {
    paddingBottom: 50,
  },
  message: {
    textAlign: "center",
    paddingVertical: 12,
    color: Colors.text,
  },
});
