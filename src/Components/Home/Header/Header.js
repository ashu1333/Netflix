import React from "react";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      {/* //NAVIGATION OF HEADER// */}

      <div className="header__nav">
        <Link tp="/">
          <img className="header__logo" src={Logo} alt="Netflix Logo" />
        </Link>

        <div className="header__right">
          <Link style={{ textDecoration: "none" }} to="/">
            <span className="header__browse">Browse</span>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <span className="header__signIn">{"Sign In"}</span>
          </Link>
        </div>
      </div>

      {/* TITLES START */}

      <span className="header__title">
        Unlimited movies, TV shows and more.
      </span>
      <span className="header__subTitle">Watch anywhere. Cancel anytime.</span>
      <span className="header__bottomTitle">
        Ready to watch? Enter your email to create or restart your membership.
      </span>

      {/* BOTTOM OF HEADER->INPUT + BUTTON  */}
      <div className="header__bottom">
        <input
          className="header__email"
          type="email"
          placeholder="Email Address"
        ></input>
        <div className="header__button">
          <span className="header__get">GET STARTED </span>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
