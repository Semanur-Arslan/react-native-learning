import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import Title from "@/components/Title";
import styles from "./indexStyles";
import AddToDo from "@/components/AddTodo";
import Card from "@/components/Card";
import { useTodoContext } from "@/todo-context/todoContex";

export default function HomeScreen() {
  const { todos } = useTodoContext();
  const notDone = todos.filter((todo) => !todo.isChecked);

  return (
    <SafeAreaView style={styles.container}>
      <Title text={"MY TODO LIST"} total={notDone.length} />
      <View style={styles.listWrapper}>
        {todos.length > 0 ? (
          <FlatList
            style={styles.list}
            data={todos}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.wrapper}>
            <Image
              style={styles.img}
              source={require("../../assets/images/firstpage.png")}
            />
            <Text style={styles.firstMessage}>
              Start Creating Your To-Do List
            </Text>
          </View>
        )}
      </View>
      <AddToDo />
    </SafeAreaView>
  );
}
