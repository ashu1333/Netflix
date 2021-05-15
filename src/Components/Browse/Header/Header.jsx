import React, { useState, useEffect } from "react";
import "./header.css";
import request from "../../../api/request";
import axios from "axios";
import Nav from "../Nav/Nav";

const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(request.fetchActionMovies, {});
      console.log(res.data.results);
      setMovies(res.data.results[Math.floor(Math.random() * (20 - 0) + 0)]);
    }

    fetchData();
  }, []);

  return (
    <div
      className="browseH"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
      }}
    >
      <Nav />
      <div className="browseH__banner">
        <span className="browseH__banner__title">
          {movies?.title || movies.name || movies?.orignal_name}
        </span>
        <span className="browseH__desc">{movies?.overview}</span>
        <div className="browseH__button">
          <span className="browseH__play">Watch Now</span>
          <span className="browseH__add">Check out More</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
