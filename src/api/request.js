const APIKEY = "28c49a0de726cc1e512b781a17cf855f";
const endpoint = "https://api.themoviedb.org/3";
const request = {
  fetchTrending: `${endpoint}/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchTreding: `${endpoint}/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetFlixOriginals: `${endpoint}/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `${endpoint}/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `${endpoint}/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `${endpoint}/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorroMovies: `${endpoint}/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanticMovies: `${endpoint}/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `${endpoint}/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default request;
