import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const SearchBar = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleButtonPress = () => {
    console.log("Testo inserito:", inputText);
  };

  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Inserisci il tuo testo"
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputText}
      />
      {/* <Text>{inputText}</Text> */}
      <Button title="Cerca" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 18,
    backgroundColor: "#fff",
  },
});

export default SearchBar;
