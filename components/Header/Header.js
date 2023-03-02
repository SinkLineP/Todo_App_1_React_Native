import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Мои задачи</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: "center",
    height: 80
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff"
  }
})