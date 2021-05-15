import React, { useEffect, useState } from "react";
import request from "../../../api/request";
import axios from "axios";
import "./row.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
const baseUrl = "https://api.themoviedb.org/3";

const Row = ({ fetchUrl, title, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  console.log(fetchUrl);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl, {});
      console.log(res.data.results);
      setMovies(res.data.results);
    }

    fetchData();
  }, []);
  return (
    <div className="row" style={{ color: "red", fontsize: "25px" }}>
      <h2> {title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.name}
              className="row__poster"
              key={movie.id}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Row;
