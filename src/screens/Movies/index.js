import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";

import apis from "../../apis";
import { MoviesList } from "../../components";
import { AppMaps } from "../../navigators/AppMaps";

export default function Movies({ navigation }) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleSearch = async () => {
    try {
      setIsFetching(true);
      const { Search = [] } = await apis.movieApi.search(search);
      setMovies(Search);
    } catch (error) {
    } finally {
      setIsFetching(false);
    }
  };

  const goToDetail = (id) => {
    navigation.navigate(AppMaps.MovieDetail, { id });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="search a movie here"
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        value={search}
      />
      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <MoviesList movies={movies} onDetail={goToDetail} />
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  searchBox: {
    backgroundColor: "#dadada",
    fontSize: 15,
    width: "100%",
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
});
