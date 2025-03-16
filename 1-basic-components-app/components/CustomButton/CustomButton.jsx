import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./CustomButtonStyles";

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
