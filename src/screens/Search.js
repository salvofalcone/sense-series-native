import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Components
import SearchBar from "../component/searchBar/searchBar";

const Search = () => {
  return (
    <View style={styles.main}>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#ffe",
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    letterSpacing: 10,
    textTransform: "uppercase",
  },
});

export default Search;
