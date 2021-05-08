import React from "react";
import Header from "./Header/Header";
import Middle from "./Middle/Middle";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <Middle />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
