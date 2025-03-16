import { TextInput, View } from "react-native";
import styles from "./AddTodoStyles";
import CustomButton from "@/components/CustomButton/CustomButton";
import { useState } from "react";
import { useTodoContext } from "@/todo-context/todoContex";

export default function AddTodo() {
  const [inputText, setInputText] = useState("");
  const { addTodo } = useTodoContext();

  const handleAddTodo = () => {
    if (inputText.trim() === "") {
      return;
    }
    const newTodo = { text: inputText };
    addTodo(newTodo);
    setInputText("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="to be done"
        value={inputText}
        onChangeText={setInputText}
      />
      <CustomButton text={"Save"} onPress={handleAddTodo} />
    </View>
  );
}
