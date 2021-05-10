import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";
import "./signup_form.css";
import Footer from "../../Home/Footer/Footer";

const Signup_form = () => {
  return (
    <div className="sform">
      <div className="sform__top">
        <Link to="/">
          <img src={Logo} className="sform__logo" />
        </Link>

        <div className="sform__form1">
          <div className="sform__form">
            <span className="sform__title">Sign Up</span>
            <form>
              <input
                type="text"
                className="sform__input"
                placeholder="Username"
              />
              <input
                type="email"
                className="sform__input"
                placeholder="Email"
              />
              <input
                type="password"
                className="sform__input"
                placeholder="password"
              />
              <button className="sform__button">Sign Up</button>
            </form>

            <div className="sform__bottom">
              <span className="sform__al">Already Registered?</span>
              <Link to="/signin">
                <span className="sform__get">Sign In here</span>
              </Link>
            </div>

            <span className="sform__desc">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<span className="sform__learn">Learn More.</span>
            </span>
          </div>
        </div>
      </div>

      <div className="sform__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Signup_form;
