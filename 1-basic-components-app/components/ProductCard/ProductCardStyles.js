import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const { width } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  img_container: {
    backgroundColor: Colors.background,
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
    color: Colors.black,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.text,
  },
  in_stock: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.danger,
  },
});
