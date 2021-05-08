import React from "react";
import image1 from "./home-tv.jpg";
import image2 from "./home-mobile.jpg";
import image3 from "./home-imac.jpg";

import "./middle.css";

const Middle = () => {
  return (
    <div className="middle">
      {/* FIRST ROW */}

      <div className="middle__part1">
        <div className="middle__part">
          <div className="middle__left">
            <span className="middle__title">Enjoy on your TV.</span>
            <span className="middle__desc">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </span>
          </div>

          <div className="middle__right">
            <img src={image1} alt="" className="middle__img" />
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="middle__part1">
        <div className="middle__part middle__reverse">
          <div className="middle__right   ">
            <img
              src={image2}
              alt=""
              className="middle__img"
              style={{ marginBottom: "50px" }}
            />
          </div>

          <div className="middle__left">
            <span className="middle__title">
              Download your shows to watch offline.
            </span>
            <span className="middle__desc">
              Save your favourites easily and always have something to watch.
            </span>
          </div>
        </div>
      </div>

      {/* THIRD ROW */}
      <div className="middle__part1">
        <div className="middle__part">
          <div className="middle__left">
            <span className="middle__title">Watch everywhere.</span>
            <span className="middle__desc">
              Stream unlimited films and TV programmes on your phone, tablet,
              laptop and TV without paying more.
            </span>
          </div>

          <div className="middle__right">
            <img src={image3} alt="" className="middle__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
