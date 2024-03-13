import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const HorizontalCard = ({ data }) => {
  return (
    <View style={styles.main}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.infoTitle}>{data.name}</Text>
        <Text
          style={styles.infoOverview}
          numberOfLines={4}
          ellipsizeMode="tail">
          {data.overview ? data.overview : "No description available"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "flex-start",
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 0.2,
    display: "flex",
    flexDirection: "row",
    height: 150,
    marginTop: 12,
  },

  image: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: "100%",
    resizeMode: "cover",
    width: "30%",
  },

  //Info section
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "center",
    width: "70%",
    padding: 12,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  infoOverview: {
    fontSize: 12,
    color: "gray",
  },
});

export default HorizontalCard;
