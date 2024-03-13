import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 3,
    borderRadius: 1000,
    borderColor: "rgba(255, 255, 255, 0.35)",
    borderWidth: 1,
    height: 40,
    width: 40,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.40)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 5,
  },
  text: {
    color: "#d8d8d8",
    fontSize: 16,
    fontWeight:"600"
  },
});

export default CustomButton;
