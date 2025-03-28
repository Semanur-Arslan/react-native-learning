import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const screen = Dimensions.get("window");

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modalView: {
    width: screen.width / 1.1,
    backgroundColor: Colors.light.background,
    borderRadius: 12,
    padding: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonClose: {
    alignItems: "flex-end",
    zIndex: 2,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  modalText: {
    color: Colors.light.text,
  },
});
