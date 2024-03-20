import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.title}>Expo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    padding: 10,
    marginTop: 140,
    width: "100%",
    position: "relative",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
