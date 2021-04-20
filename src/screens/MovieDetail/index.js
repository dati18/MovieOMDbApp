import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import apis from "../../apis";
import { MovieDetail } from "../../components";

export default function Detail({ route }) {
  const { id } = route.params;

  const [movie, setMovie] = useState();
  const [isFetching, setIsFetching] = useState(false);

  getDetail = async (id) => {
    try {
      setIsFetching(true);
      const _movie = await apis.movieApi.getMovie(id);
      setMovie(_movie);
    } catch (error) {
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  return (
    <View style={styles.container}>
      {isFetching ? <ActivityIndicator /> : <MovieDetail movie={movie} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
