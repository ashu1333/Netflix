import React from "react";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form__top">
        <Link to="/">
          <img src={Logo} className="form__logo" width="20%" />
        </Link>

        <div className="form__form1">
          <div className="form__form">
            <span className="form__title">Sign In</span>
            <form>
              <input type="email" className="form__input" placeholder="Email" />
              <input
                type="password"
                className="form__input"
                placeholder="password"
              />
              <button className="form__button">Sign in</button>
            </form>

            <div className="form__subtitle">
              <span className="form__new">New to Netflix?</span>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <span className="form__signup">Sign Up now</span>
              </Link>
            </div>

            <span className="form__desc">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="form__learn"> Learn More.</span>
            </span>
          </div>
        </div>
      </div>

      <div className="form__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Form;
