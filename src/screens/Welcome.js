import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Sense Series</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    textTransform: "uppercase",
    letterSpacing: 10,
  },
});

export default Welcome;
