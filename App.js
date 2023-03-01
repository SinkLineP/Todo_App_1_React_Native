import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the ARK", key: "3" },
  ])

  const handleClick = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  return (
    <View style={styles.container}>
      {/*header*/}
      <Header />
      <View style={styles.content}>
        {/*form*/}
        <View style={styles.list}>
          <FlatList data={todos} renderItem={
            ({ item }) => {
              return (
                <TodoItem item={item} handleClick={handleClick} />
              )
            }
          } />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
