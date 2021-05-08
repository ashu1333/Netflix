import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">Questions? Call 000-800-040-1843</div>

      <div className="footer__main">
        <div className="footer__content">
          <span className="footer__link">FAQ </span>
          <span className="footer__link">Investor Relations</span>

          <span className="footer__link">Privacy </span>
          <span className="footer__link">Speed Test</span>
        </div>

        <div className="footer__content">
          <span className="footer__link">Relations </span>
          <span className="footer__link">Jobs</span>
          <span className="footer__link"> Cookie Preferances </span>
          <span className="footer__link">Legal Notice </span>
        </div>

        <div className="footer__content">
          <span className="footer__link">Account </span>
          <span className="footer__link">Ways to Watch</span>
          <span className="footer__link"> Corporate Information </span>
          <span className="footer__link">Netflix originals </span>
        </div>
        <div className="footer__content">
          <span className="footer__link">Media Centre </span>
          <span className="footer__link">Terms of Use</span>
          <span className="footer__link"> Contact Us </span>
        </div>
      </div>
      <span className="footer__country">Netflix India</span>
    </div>
  );
};

export default Footer;
