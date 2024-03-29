import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const HorizontalCard = ({ data, onCardClick }) => {
  return (
    <TouchableOpacity onPress={() => onCardClick(data)}>
      <View style={styles.main} onPress={() => onCardClick(data)}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w342/${data.poster_path}`,
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
    </TouchableOpacity>
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
