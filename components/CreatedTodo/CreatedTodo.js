import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function CreatedTodo() {
  const [text, setText] = useState("")
  const changeHandler = (content) => {
    setText(content)
  }

  return (
    <View>
      <TextInput
        placeholder={"new todo..."}
        onChangeText={changeHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({

})