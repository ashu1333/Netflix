import React, { useState } from "react";
import Logo from "../../Home/Header/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { ArrowDropDown } from "@material-ui/icons";
import Background from "./theIrishman.jpg";
import profile from "./user.png";
import "./header.css";
const Header = () => {
  const showProfileHandler = () => {};
  const handleScroll = () => {};
  const [myprofile, showProfile] = useState(false);
  return (
    <div className="browseH" style={{ backgroundImage: `URL(${Background})` }}>
      <div className="browserH__navbar">
        <div className="browseH__navbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="browseH__logo" src={Logo} width="20%" />
          </Link>

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
          <div className="browseH__p">
            {/* <Profile className="browseH__pc" /> */}
          </div>
          {/* {
            myprofile ? (
              <div className="browseH__p">
                <Profile className="browseH__pc" />
              </div>
            ) : null
          } */}
        </div>
      </div>

      <div className="browseH__banner">
        <span className="browseH__banner__title">Watch The Irishman Now</span>
        <span className="browseH__desc">
          'The Irishman' is a fictionalized true crime story about the
          disappearance of Jimmy Hoffa, a mystery that still hasn't been solved.
          Long-time International Brotherhood of Teamsters boss, James "Jimmy"
          Hoffa, went missing in 1975.
        </span>
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
