import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

//Components
import SearchBar from "../component/searchBar/searchBar";
import Card from "../component/card/card";

const Home = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDJkZGY1ZWExZTM2MGIzMmE3ZjVhODk0MWI0YTQwNSIsInN1YiI6IjY0N2Q4Y2ZkY2FlZjJkMDBkZjg5ODc4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mI0q_8Jcx9K8qcRJC_iXb87TBXiB1XC39maaxTGyvr8",
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ScrollView style={styles.main}>
      <SearchBar />
      <Text style={styles.title}>Top rated</Text>
      <View style={styles.cardsContainer}>
        {data && data.map((el, index) => <Card data={el} key={index} />)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    flex: 1,
    padding: 18,
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
    alignItems: "start",
  },
});

export default Home;
