import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.main}>
      <Text>HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    color: "#ffe",
    height: "100%",
    width: "100%",
  },
});

export default Home;
