import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./loginFooterStyles";

export default function LoginFooter({ onPress, message, linkText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
}
