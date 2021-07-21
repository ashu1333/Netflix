import React, { useState } from "react";
import Logo from "./logo.svg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../../firebase";
import Footer from "../../Home/Footer/Footer";
import "./form.css";

const Form = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/browse");
      })
      .catch((error) => {
        setPassword("");
        // alert(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="form">
      <div className="form__top">
        <Link to="/">
          <img src={Logo} className="form__logo" width="20%" />
        </Link>

        <div className="form__form1">
          <div className="form__form">
            <span className="form__title">Sign In</span>
            <form onSubmit={signInHandler}>
              <input
                type="email"
                className="form__input"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                className="form__input"
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button type="submit" className="form__button">
                Sign in
              </button>
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
