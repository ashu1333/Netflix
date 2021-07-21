import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import StarIcon from "@material-ui/icons/Star";
import Header from "../Header/Header";
import { useParams, Link } from "react-router-dom";
import request from "../../../api/request";
import "./detail.css";
import ReactPlayer from "react-player";
import { useStateValue } from "../../../StateProvider/StateProvider";

const Detail = () => {
  let params = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [videoKey, setVideoKey] = useState();
  const [cast, setCast] = useState([]);
  const [{ myList }, dispatch] = useStateValue();

  // console.log(params.id);
  // console.log(request.movieDetailURL);
  // console.log(movieDetail);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${request.movieDetailURL}/${params.id}`,
        {
          params: {
            api_key: "28c49a0de726cc1e512b781a17cf855f",
            language: "en_US",
          },
        }
      );
      setMovieDetail(data);

      const {
        data: { results },
      } = await axios.get(`${request.videoURL}/${params.id}/videos`, {
        params: {
          api_key: "28c49a0de726cc1e512b781a17cf855f",
          language: "en_US",
        },
      });

      setVideoKey(results[0]?.key);

      const {
        data: { cast },
      } = await axios.get(`${request.movieCastURL}/${params.id}/credits`, {
        params: {
          api_key: "28c49a0de726cc1e512b781a17cf855f",
          language: "en_US",
        },
      });
      setCast(cast);
    }

    fetchData();
  }, []);

  function splitDate(date) {
    return date.split("-")[0];
  }

  const getWiki = (actor) => actor.replace(new RegExp(" ", "g"), "_");

  const addToMyList = () => {
    dispatch({
      type: "ADD_TO_MYLIST",
      item: {
        id: movieDetail.id,
        image: movieDetail.backdrop_path,
        title: movieDetail.original_title,
        desc: movieDetail.overview,
      },
    });
  };
  return (
    <div className="detail__container">
      <Link className="back-to-home" to="/browse">
        <HomeTwoToneIcon className="back__arrow" />
        <p className="back__text">Back to Home</p>
      </Link>
      <hr className="seperator-detail" />
      {/* <Header /> */}

      <section className="detail">
        <div className="movie__detail">
          <div className="movie-detail-text">
            <div className="movie-detail__title">
              <h1>
                {movieDetail.original_title}

                <span className="movie__release-date">
                  {"    "}({movieDetail.release_date})
                </span>
              </h1>
              <span className="movie__star">
                <StarIcon />
                <span className="star">{movieDetail.vote_average}</span>
              </span>
            </div>

            <div className="movie__detail__extra">
              {movieDetail?.genres?.map((genre) => (
                <span key={genre.name || Math.random()} className="genre">
                  {genre.name} <span className="genre__seprator">|</span>
                </span>
              ))}
              <span>{movieDetail.runtime} min</span>
              <span className="genre__seperator">|</span>{" "}
              <span className="release__date">{movieDetail.release_date}</span>
              <span className="genre__seperator">|</span>{" "}
              <span className="browseH__mylist" onClick={addToMyList}>
                Add to List
              </span>
              <p className="movie__overview">{movieDetail.overview}</p>
            </div>
          </div>

          <div className="player__wrapper">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoKey}`}
              className="react__player"
              playing
              controls
            />
          </div>
        </div>

        <div className="casts">
          {cast.slice(0, 4).map((actor) => (
            <div className="cast__info" key={actor.name || Math.random()}>
              {actor.profile_path !== null && (
                <a
                  href={`https://en.wikipedia.org/wiki/${getWiki(actor.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  key={actor.name}
                  className="cast__link"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt="actorPhoto"
                    className="cast__image"
                  />
                  <p className="cast__name">{actor.name}</p>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Detail;
