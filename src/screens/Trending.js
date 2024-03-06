import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

//Components
import Card from "../component/card/card";
import Swiper from "react-native-swiper";

//Styles
import { Colors } from "../utils/Colors";

const Trending = () => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDJkZGY1ZWExZTM2MGIzMmE3ZjVhODk0MWI0YTQwNSIsInN1YiI6IjY0N2Q4Y2ZkY2FlZjJkMDBkZjg5ODc4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mI0q_8Jcx9K8qcRJC_iXb87TBXiB1XC39maaxTGyvr8",
    },
  };

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
    <View style={styles.main}>
      <Text style={styles.title}>Top rated series</Text>
      <View style={styles.list}>
        {data &&
          data.map((el, index) => (
            <TouchableOpacity
              key={index + 1}
              onPress={() => {
                console.log(el.name);
              }}>
              <View style={styles.listItem} key={index + 1}>
                <Text>{index + 1}</Text>
                <Text>{el.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    paddingTop: 60,
    width: "100%",
    height: "100%",
    padding: 18,
  },
  list: {},
  listItem: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
    height: 48,
  },
  title: {
    color: "#000",
    fontSize: 24,
  },
});

export default Trending;
