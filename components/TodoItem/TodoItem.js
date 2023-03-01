import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


export default function TodoItem({ item, handleClick }) {
  const { text, key } = item;
  // console.log(text + " in component!");



  return (
    <TouchableOpacity onPress={() => handleClick(key)}>
      <Text style={styles.item}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  }
})

//<FlatList
//  data={todos}
//  renderItem={({ item }) => (
//    <Text>{item.text}</Text>
//  )}
///>