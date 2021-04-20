import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export const MoviesItem = ({ movie = {}, onDetail }) => {
  handleClick = () => {
    onDetail && onDetail(movie.imdbID);
  };

  return (
    <TouchableHighlight key={movie.imdbID} onPress={handleClick}>
      <View style={styles.result}>
        <Image source={{ uri: movie.Poster }} style={styles.poster} />
        <View style={styles.inforBox}>
          <Text style={styles.subheading}>{movie.Year}</Text>
          <Text style={styles.heading}>{movie.Title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export const styles = StyleSheet.create({
  result: {
    flex: 1,
    width: "100%",
    height: 150,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "#C0C0C0"
  },
  inforBox: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginLeft: 20,
  },
  heading: {
    flex: 1,
    color: "#000",
    fontSize: 15,
    width: "100%",
    marginTop: 10,
  },
  subheading: {
    marginTop: 20,
    color: "#696969",
    fontSize: 12,
    width: "100%",
  },
  poster: {
    width: 90,
    height: 133.2,
    alignSelf: "center",
    resizeMode: "contain",
  },
});
