import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View, Text} from "react-native";

export default function CreatedTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const [isStatus, setStatus] = useState(false);

  const changeHandler = (content) => {
    if (content !== "") {
      setStatus(true)
      setText(content)
    } else {
      setStatus(false)
    }
  }

  const showMessageError = (errorMessage) => {
    return errorMessage;
  }


  return (
    <View>
      <Text style={styles.errorMessage}>{!isStatus ? showMessageError("Вы не заполнили название задачи.") : ""}</Text>
      <TextInput
        value={text}
        style={styles.input}
        placeholder={"new todo..."}
        onChangeText={changeHandler}
      />
      <Button
        title={"add todo"}
        onPress={() => {
          if (isStatus !== false) {
            submitHandler(text)
            setText("")
            setStatus(false)
          }
        }}
        color={!isStatus ? "#febaa4" : "coral"} />
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