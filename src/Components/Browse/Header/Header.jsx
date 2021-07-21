import React, { useState, useEffect } from "react";
import "./header.css";
import request from "../../../api/request";
import axios from "axios";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(request.fetchActionMovies, {});

      setMovies(res.data.results[Math.floor(Math.random() * (20 - 0) + 0)]);
    }

    fetchData();
  }, []);

  function handleScroll() {
    window.scroll({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  }

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
          <Link
            to={{ pathname: `browse/detail/${movies?.id}` }}
            style={{ textDecoration: "none" }}
          >
            <span className="browseH__play">Watch Now</span>
          </Link>

          <span className="browseH__add" onClick={handleScroll}>
            Check out More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
