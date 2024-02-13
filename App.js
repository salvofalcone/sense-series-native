import { useState } from "react";
import { StyleSheet, View } from "react-native";

//Components
import Welcome from "./src/screens/Welcome";
import Home from "./src/screens/Home";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  //TODO: cambia il timing
  setTimeout(() => {
    setIsLoading(false);
  }, 300);

  return (
    <View style={styles.container}>{isLoading ? <Welcome /> : <Home />}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
  },
});
