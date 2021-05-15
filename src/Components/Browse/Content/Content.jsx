import React, { useEffect } from "react";
import Header from "../Header/Header";
import Row from "../Row/Row";
import request from "../../../api/request";
import "./content.css";
const Content = () => {
  return (
    <div className="content">
      <Header />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetFlixOriginals}
        isLargeRow={true}
      />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Trending Now" fetchUrl={request.fetchTreding} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanticMovies} />
    </div>
  );
};

export default Content;
