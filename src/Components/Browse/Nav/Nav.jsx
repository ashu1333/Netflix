import React, { useState, useEffect } from "react";
import Logo from "../../Home/Header/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { ArrowDropDown } from "@material-ui/icons";
import Background from "./theIrishman.jpg";
import profile from "./user.png";
import Profile from "../Profile/Profile";
import "./nav.css";

const Nav = () => {
  const [myprofile, showProfile] = useState(false);
  const [show, setShow] = useState(false);
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

  const showProfileHandler = () => {
    showProfile(!myprofile);
  };

  return (
    <>
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
            <span className="browseH__link link2">Series</span>
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
          >
            <span className="browseH__mylist">My List(2)</span>
          </NavLink>
        </div>

        <div className="browseH_navbarRight">
          <div className="browseH__profileDiv" onClick={showProfileHandler}>
            <img className="browseH__profile" src={profile} alt="Profile" />
            <ArrowDropDown className="browseH__arrow" />
          </div>

          {myprofile ? (
            <div className="browseH__p">
              <Profile className="browseH__pc" />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Nav;
