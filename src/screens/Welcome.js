import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Sense Series</Text>
      {/* <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        /> */}
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
