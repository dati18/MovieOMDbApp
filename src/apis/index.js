import axios from "axios";
import { MovieApi } from "./movie";

const baseURL = "http://www.omdbapi.com/?apikey=a1bfa6bc";

const instance = axios.create({
  baseURL,
});

export class Apis {
  movieApi;
  constructor() {
    this.movieApi = new MovieApi(instance);
  }
}

export default new Apis();
