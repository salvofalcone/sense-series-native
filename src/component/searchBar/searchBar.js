import React, { useState } from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Inserisci il tuo testo"
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputText}
        />
        <Feather
          name="search"
          size={24}
          color="white"
          onPress={handleButtonPress}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    margin: 5,
    color: "#fff",
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SearchBar;
