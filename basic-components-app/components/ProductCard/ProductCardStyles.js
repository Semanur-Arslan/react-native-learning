import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  img_container: {
    backgroundColor: "white",
    padding: 8,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 4,
  },
  img: {
    width: "100%",
    height: width / 2,
    resizeMode: "contain",
  },
  body: {
    padding: 4,
    flex: 1,
    justifyContent: "space-between",
    rowGap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#606060",
  },
  in_stock: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#CC0000",
  },
});

export default styles;
