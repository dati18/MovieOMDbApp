import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

export const MovieDetail = ({ movie }) => {
  if (!movie)
    return (
      <View>
        <Text>Movie invalid</Text>
      </View>
    );

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.movieInfo}>
        <Image source={{ uri: movie.Poster}} style={styles.poster} resizeMode={'contain'}/>
        <View style={styles.movieRatedInfo}>
          <Text style={styles.movieRated}>{movie.Rated}    {movie.Year}    {movie.Runtime}</Text>
          <Text style={styles.movieTitle}>{movie.Title}</Text>
          <Text style={styles.movieGenre}>{movie.Genre}</Text>
        </View>
      </View>
      <View style={styles.movieRatingBox}>
        <View style={styles.movieRatingInfo}>
          <Image resizeMode={'contain'} style={styles.icon} source={{ uri: "https://img.icons8.com/ios-filled/100/000000/imdb.png" }}/>
          <Text style={styles.score}>{movie.imdbRating}</Text>
        </View>
        <View style={styles.movieRatingInfo}>
          <Image resizeMode={'contain'} style={styles.icon} source={{ uri: "https://img.icons8.com/color/48/000000/metascore.png" }}/>
          <Text style={styles.score}>{movie.Metascore}</Text>
        </View>
      </View>

      <View style={styles.facts}>
        <Text style={{fontSize: 18, color:'#696969', paddingBottom: 5}}>Facts</Text>
        <Text style={styles.factType}>Plot</Text>
        <Text style={styles.factDetail}>{movie.Plot}</Text>
        <Text style={styles.factType}>Original Title</Text>
        <Text style={styles.factDetail}>{movie.Title}</Text>
        <Text style={styles.factType}>Original Language</Text>
        <Text style={styles.factDetail}>{movie.Language}</Text>
        <Text style={styles.factType}>Directed By</Text>
        <Text style={styles.factDetail}>{movie.Director}</Text>
        <Text style={styles.factType}>Written By</Text>
        <Text style={styles.factDetail}>{movie.Writer}</Text>
        <Text style={styles.factType}>Produced By</Text>
        <Text style={styles.factDetail}>{movie.Production}</Text>
        <Text style={styles.factType}>Cast</Text>
        <Text style={styles.factDetail}>{movie.Actors}</Text>
        <Text style={styles.factType}>Awards</Text>
        <Text style={styles.factDetail}>{movie.Awards}</Text>
        <Text style={styles.factType}>Box Office</Text>
        <Text style={styles.factDetail}>{movie.BoxOffice}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movieInfo:{
    flex: 1,
    flexDirection:'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#C0C0C0',
    marginBottom: 10,
  },
  movieRatedInfo:{
    flex: 1,
    flexDirection:'column',
    marginLeft:10,
  },
  movieRatingInfo:{
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
  },
  movieRatingBox:{
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingBottom: 15
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  poster:{
    paddingTop: 100,
    width: 140,
    height: '100%',
  },
  infoBox:{
    flexDirection: "row"
  },
  movieTitle: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
  },
  movieRated:{
    fontSize: 12,
    color: "#696969",
    marginBottom: 10
  },
  movieGenre:{
    marginBottom: 120,
    fontSize: 12,
    color: "#696969",
  },
  icon:{
    width: 50,
    height: 50,
  },
  facts:{
    flex: 1,
    padding: 10,
    flex: 1,
    backgroundColor: '#DCDCDC'
  },
  factType:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  factDetail: {
    fontSize: 14,
    paddingBottom: 5,
  },
});