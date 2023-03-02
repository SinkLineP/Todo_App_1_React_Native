import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View, Text} from "react-native";

export default function CreatedTodo({ submitHandler, isShowBtn }) {
  const [text, setText] = useState("");

  const changeHandler = (content) => {
    setText(content)
  }


  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder={"new todo..."}
        onChangeText={changeHandler}
      />
      <Button
        title={"add todo"}
        onPress={() => {
            submitHandler(text)
            setText("")
        }}
        color={"coral"} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold"
  }
})