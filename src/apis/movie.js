import axios, { AxiosInstance } from "axios";

export class MovieApi {
  axiosInstance;
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async search(search = "") {
    try {
      const { data } = await this.axiosInstance.get("", {
        params: {
          s: search,
        },
      });
      return data;
    } catch (error) {
      // TODO: handle error
      return {
        Response: false,
      };
    }
  }

  async getMovie(id) {
    try {
      const { data } = await this.axiosInstance.get("", {
        params: {
          i: id,
        },
      });
      return data;
    } catch (error) {
      // TODO: handle error
      return {
        Response: false,
      };
    }
  }
}
