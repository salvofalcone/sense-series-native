import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, ScrollView, Button } from "react-native";

//Components
import HorizontalCard from "../card/horizontalCard";
import CustomButton from "../button/Button";

//Utils
import { Feather } from "@expo/vector-icons";
import Card from "../card/card";

const SearchBar = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDJkZGY1ZWExZTM2MGIzMmE3ZjVhODk0MWI0YTQwNSIsInN1YiI6IjY0N2Q4Y2ZkY2FlZjJkMDBkZjg5ODc4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mI0q_8Jcx9K8qcRJC_iXb87TBXiB1XC39maaxTGyvr8",
    },
  };

  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setShowDetails(true);
  };

  //This useEffect listens to the modifies of input text and fetch data with that query
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?query=${inputText}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchResults(response.results))
      .catch((err) => console.error(err));
  }, [inputText]);

  //This useEffect listents to the selected card (clicked by user)
  useEffect(() => {
    if (selectedCard) {
      // navigation.navigate("CardDetailsScreen", { cardData: selectedCard });
      console.log(selectedCard);
    }
  }, [selectedCard]);

  return (
    <View style={styles.main}>
      <View style={[styles.inputContainer, isFocused && styles.inputActive]}>
        <TextInput
          placeholder="Search for tv series"
          style={styles.input}
          onChangeText={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={inputText}
        />
        <Feather name="search" size={24} color="#eb3d00" style={styles.icon} />
      </View>

      <ScrollView style={styles.displayContainer}>
        {searchResults &&
          searchResults.map((el, index) => (
            <HorizontalCard
              data={el}
              key={index}
              onCardClick={handleCardClick}
            />
          ))}
      </ScrollView>

      {showDetails && (
        <View style={styles.cardContainer}>
          <View style={styles.cardContainer__Button}>
            <CustomButton onPress={() => setShowDetails(false)} title="x" />
          </View>
          <View>
            <Card data={selectedCard} />
          </View>
        </View>
      )}
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
  inputActive: {
    borderColor: "orange",
    borderWidth: 1,
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

  //card
  cardContainer: {
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff",
    top: 0,
    left: 10,
    width: "100%",
  },

  cardContainer__Button: {
    position: "absolute",
    right: 12,
    top: 12,
    zIndex: 1,
  },
});

export default SearchBar;
