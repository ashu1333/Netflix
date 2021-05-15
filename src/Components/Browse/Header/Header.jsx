import React, { useState, useEffect } from "react";
import Logo from "../../Home/Header/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { ArrowDropDown } from "@material-ui/icons";
import Background from "./theIrishman.jpg";
import profile from "./user.png";
import "./header.css";
import request from "../../../api/request";
import axios from "axios";

const Header = () => {
  const showProfileHandler = () => {};

  const [myprofile, showProfile] = useState(false);
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(request.fetchActionMovies, {});
      console.log(res.data.results);
      setMovies(res.data.results[Math.floor(Math.random() * (20 - 0) + 0)]);
    }

    fetchData();
  }, []);

  function handleScroll() {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="browseH"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
      }}
    >
      <div className={`browseH__navbar ${show && "browseH_Y"}`}>
        <div className="browseH__navbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}></Link>
          <img className="browseH__logo" src={Logo} />

          <NavLink
            activeClassName="browseH__active"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <span className="browseH__link browseH__link2">Home</span>
          </NavLink>
          <NavLink
            activeClassName="browseH__active"
            to="/browse/series"
            style={{ textDecoration: "none" }}
          >
            <span className="browseH__link">Series</span>
          </NavLink>

          <NavLink
            activeClassName="browseH__active"
            to="/browse/movies"
            style={{ textDecoration: "none" }}
          >
            <span className="browseH__link">Movies</span>
          </NavLink>

          <NavLink
            activeClassName="browseH__active"
            to="/browse/mylist"
            style={{ textDecoration: "none" }}
          ></NavLink>
          <NavLink
            activeClassName="browseH__active"
            to="/browse/mylist"
            style={{ textDecoration: "none" }}
          >
            <span className="browseH__mylist">My List(2)</span>
          </NavLink>
        </div>

        <div className="browseH_navbarRight">
          <div className="browseH__profileDiv" onClick={showProfileHandler}>
            <img className="browseH__profile" src={profile} alt="Profile" />
            <ArrowDropDown className="browseH__arrow" />
          </div>
        </div>
      </div>
      <div className="browseH__banner">
        <span className="browseH__banner__title">
          {movies?.title || movies.name || movies?.orignal_name}
        </span>
        <span className="browseH__desc">{movies?.overview}</span>
        <div className="browseH__button">
          <span className="browseH__play">Watch Now</span>
          <span className="browseH__add" onClick={handleScroll}>
            Check out More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
