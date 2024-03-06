import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Components
import SearchBar from "../component/searchBar/searchBar";

//Styles
import { Colors } from "../utils/Colors";

const Search = () => {
  return (
    <View style={styles.main}>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.dark_background,
    width: "100vh",
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

export default Search;
