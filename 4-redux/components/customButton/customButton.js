import { Text, TouchableOpacity } from "react-native";
import styles from "./customButtonStyles";
import { Colors } from "../../constants/Colors";

export default function CustomButton({ title, onPress, backgroundColor }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: Colors[backgroundColor] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
