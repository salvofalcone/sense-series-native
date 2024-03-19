import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

//Components
import Card from "../component/card/card";
import Swiper from "react-native-swiper";

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
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.swiper}
          showsButtons={false}
          showsPagination={false}
          loop={true}>
          {data &&
            data.map((el, index) => (
              <View style={styles.slide} key={index}>
                <Card data={el} />
              </View>
            ))}
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    color: "#ffe",
    width: "100%",
    height: "100%",
  },
  swiperContainer: {
    width: "100%",
    height: "100%",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Trending;
