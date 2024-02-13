import { StyleSheet } from "react-native";

const green = "green";
const yellow = "yellow";

module.exports = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor: green,
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
    color: yellow,
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "yellow",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
  test: {
    color: "red",
  },
});
