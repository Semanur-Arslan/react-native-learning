import React, { createContext, useState, useContext, useEffect } from "react";
import { Platform } from "react-native";

const apiUrl = Platform.select({
  ios: "http://localhost:5000", // iOS için localhost
  android: "http://10.0.2.2:5000", // Android emülatörü için 10.0.2.2
});

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = (newTodo) => {
    fetch(`${apiUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos((prevTodos) => [...prevTodos, data]);
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  const updateTodo = (id, isChecked) => {
    fetch(`${apiUrl}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isChecked }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          )
        );
      })
      .catch((error) => console.error("Error updating todo:", error));
  };

  const deleteTodo = (id) => {
    fetch(`${apiUrl}/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.error("Error deleting todo:", error));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
