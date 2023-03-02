import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>1</Text>
      <Text style={styles.boxTwo}>2</Text>
      <Text style={styles.boxThree}>3</Text>
      <Text style={styles.boxFo}>4</Text>
      <Text style={styles.boxFive}>5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#ddd"
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 10,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 10,
  },
  boxFo: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 10,
  },
  boxFive: {
    flex: 1,
    backgroundColor: "green",
    padding: 10,
  },
});