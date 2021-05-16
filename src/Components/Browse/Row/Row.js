import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import "./row.css";

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
            <Link
              to={{ pathname: `browse/detail/${movie.id}` }}
              style={{ textDecoration: "none" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.name}
                className="row__poster"
                key={movie.id}
              />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Row;
