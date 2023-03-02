import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, handleClick }) {
  const { text, key } = item;



  return (
    <TouchableOpacity style={styles.item}>
      <Text>{text}</Text>
      <MaterialIcons name="delete-forever" size={24} color="red" onPress={() => handleClick(key)}/>
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})

//<FlatList
//  data={todos}
//  renderItem={({ item }) => (
//    <Text>{item.text}</Text>
//  )}
///>