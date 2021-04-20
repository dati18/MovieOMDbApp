import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MoviesItem } from "./MovieItem";

export const MoviesList = ({ movies = [], onDetail }) => {
  if (!movies.length)
    return (
      <View>
        <Text>No Movie</Text>
      </View>
    );
  return (
    <ScrollView style={styles.results} showsVerticalScrollIndicator={false}>
      {movies.map((movie) => (
        <MoviesItem movie={movie} key={movie.imdbID} onDetail={onDetail} />
      ))}
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  results: {
    flex: 1,
    width: 350,
  },
  result: {
    flex: 1,
    width: "100%",
    height: 150,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.2,
  },
});
