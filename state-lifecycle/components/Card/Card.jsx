import { Text, View, TouchableOpacity } from "react-native";
import styles from "./CardStyles";
import CheckBox from "react-native-check-box";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useTodoContext } from "@/todo-context/todoContex";

export default function Card({ item }) {
  const [isChecked, setIsChecked] = useState(false);
  const { updateTodo, deleteTodo } = useTodoContext();

  function handleCheckbox() {
    const newCheckedValue = !isChecked;
    setIsChecked(!isChecked);
    updateTodo(item.id, newCheckedValue);
  }

  function handleDeleteTodo() {
    deleteTodo(item.id);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleCheckbox}>
      <View style={styles.wrapper}>
        <CheckBox
          isChecked={isChecked}
          onClick={handleCheckbox}
          checkBoxColor={Colors.primary}
        />
        <Text
          style={[styles.text, isChecked ? styles.doneText : styles.newText]}
        >
          {item.text}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDeleteTodo}>
        <MaterialIcons name="delete" size={20} color={Colors.lightDark} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
