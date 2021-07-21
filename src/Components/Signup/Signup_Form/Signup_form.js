import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./logo.svg";
import "./signup_form.css";
import Footer from "../../Home/Footer/Footer";

import { auth } from "../../../firebase";

const Signup_form = () => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signUpHandler = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then((auth) => {
            history.push("/browse");
          })
      )
      .catch((error) => {
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <div className="sform">
      <div className="sform__top">
        <Link to="/">
          <img src={Logo} className="sform__logo" />
        </Link>

        <div className="sform__form1">
          <div className="sform__form">
            <span className="sform__title">Sign Up</span>
            <form onSubmit={signUpHandler}>
              <input
                type="text"
                required
                value={firstName}
                className="sform__input"
                placeholder="Username"
                onChange={(event) => setFirstName(event.target.value)}
              />
              <input
                required
                value={email}
                type="email"
                className="sform__input"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="sform__input"
                placeholder="password"
              />
              <button className="sform__button" type="submit">
                Sign Up
              </button>
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
