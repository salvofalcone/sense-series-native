import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Card = ({ data }) => {
  return (
    <View style={styles.main}>
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.title}>{data.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 4,
    width: 260,
    height: 320,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
  },
  title: {
    color: "white",
    fontSize: 16,
  },
  image: {
    width: 250,
    height: 200,
  },
});

export default Card;
