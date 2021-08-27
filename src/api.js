import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "127c866ecb9630df124cbd4e2522af1c",
    language: "ko-KR",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
  top_rated: () => api.get("movie/top_rated"),
  detail: (id) => api.get(`movie/${id}`),
  video: (id) => api.get(`movie/${id}/videos`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};
