import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {useState} from "react";
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";
import CreatedTodo from "./components/CreatedTodo/CreatedTodo";
import Sandbox from "./components/Sandbox/Sandbox";

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

  const pushTodoToData = (value) => {
    if (value.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: value, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else if (value.length === 0) {
      Alert.alert("Упс!", "Это поле не должно быть пустым.", [
        {text: "Понятно", onPress: () => console.log("Сообщение будет закрыто.")}
      ])
    } else if (value.length <= 3 && value.length !== 0) {
      Alert.alert("Упс!", "Длина должна быть больше 3-х символов.", [
        {text: "Понятно", onPress: () => console.log("Сообщение будет закрыто.")}
      ])
    }


  }




  return (
    // <>
    //   <Sandbox />

    // </>

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      // console.log("dis keyboard")
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <CreatedTodo submitHandler={pushTodoToData} />
          <View style={styles.list}>
            <FlatList data={todos} renderItem={
              ({ item }) => {
                return (
                  <TodoItem item={item} handleClick={handleClick}/>
                )
              }
            } />
          </View>
        </View>
      <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
