import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";

//Components
import HorizontalCard from "../card/horizontalCard";

//Utils
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDJkZGY1ZWExZTM2MGIzMmE3ZjVhODk0MWI0YTQwNSIsInN1YiI6IjY0N2Q4Y2ZkY2FlZjJkMDBkZjg5ODc4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mI0q_8Jcx9K8qcRJC_iXb87TBXiB1XC39maaxTGyvr8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?query=${inputText}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchResults(response.results))
      .catch((err) => console.error(err));
  }, [inputText]);

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search for tv series"
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputText}
        />
        <Feather name="search" size={24} color="#eb3d00" style={styles.icon} />
      </View>

      <ScrollView style={styles.displayContainer}>
        {searchResults &&
          searchResults.map((el, index) => (
            <HorizontalCard data={el} key={index} />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    padding: 10,
    marginTop: 140,
    width: "100%",
  },

  //searchBar's style
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#efefef",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  input: {
    color: "#000",
    flex: 1,
    fontSize: 16,
    height: 40,
    margin: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
  },

  //results style
  displayContainer: {
    width: "100%",
  },

  displayText: {
    fontSize: 16,
    color: "black",
  },
});

export default SearchBar;
