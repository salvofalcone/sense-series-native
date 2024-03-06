import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Card = ({ data }) => {
  return (
    <View style={styles.main}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.bottom}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.description}>{data.overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 8,
    justifyContent: "center",
    width: "100%",
  },
  bottom: {
    height: "55%",
  },
  title: {
    color: "#000",
    fontSize: 24,
  },
  description: {
    color: "grey",
    fontSize: 16,
  },
  image: {
    height: "50%",
    resizeMode: "contain",
    width: "100%",
  },
});

export default Card;
