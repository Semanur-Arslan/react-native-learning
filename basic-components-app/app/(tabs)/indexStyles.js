import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    color: "purple",
  },
  search_bar: {
    margin: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#E0E0E0",
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
    color: "gray",
  },
});

export default styles;
