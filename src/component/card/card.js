import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const Card = ({ data }) => {
  return (
    <View style={styles.main}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w342/${data.poster_path}`,
        }}
        style={styles.image}
      />

      <View style={styles.focus}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.info}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoName}>Rating:</Text>
            <Text style={styles.infoValue}>{data.vote_average}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoName}>Popularity:</Text>
            <Text style={styles.infoValue}>{data.popularity}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoName}>Release date:</Text>
            <Text style={styles.infoValue}>{data.first_air_date}</Text>
          </View>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Plot summary:</Text>
        <ScrollView>
          <Text style={styles.description}>{data.overview}</Text>
        </ScrollView>
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
    justifyContent: "flex-start",
    width: "100%",
  },

  image: {
    borderRadius: 40,
    height: "55%",
    resizeMode: "cover",
    width: "100%",
  },

  //Focus
  focus: {
    width: "92%",
    height: "16%",
    backgroundColor: "#fff",
    borderRadius: 16,
    position: "absolute",
    top: "45%",
    paddingHorizontal: 12,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    gap: 12,
  },

  title: {
    color: "#222222",
    fontSize: 24,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  info: {
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "100%",
  },
  infoContainer: {
    gap: "4px",
  },
  infoName: {
    color: "#eb3d00f7",
    fontWeight: "500",
    fontSize: 12,
  },
  infoValue: {
    fontWeight: "500",
    color: "gray",
    fontSize: 12,
  },

  //Description
  descriptionContainer: {
    marginTop: "10%",
    padding: 24,
  },
  descriptionTitle: {
    color: "#eb3d00f7",
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    color: "grey",
    fontSize: 16,
  },
});

export default Card;
