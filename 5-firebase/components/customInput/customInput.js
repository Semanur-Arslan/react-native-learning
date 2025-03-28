import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./customInputStyles";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CustomInput({
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  onBlur,
  error,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={isPasswordVisible}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
          style={styles.input}
        />
        {secureTextEntry == true && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.toggleButton}
          >
            <Text>
              {isPasswordVisible ? (
                <Feather name="eye" size={20} color={Colors.light.icon} />
              ) : (
                <Feather name="eye-off" size={20} color={Colors.light.icon} />
              )}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View style={styles.errorWrapper}>
          <AntDesign name="warning" size={12} color={Colors.danger} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
}
