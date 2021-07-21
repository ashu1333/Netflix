import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.facebook.com/netflix/" target="_blank">
          {" "}
          <FacebookIcon
            className="social-media__icons"
            style={{ fontSize: "35px", color: "grey" }}
          />
        </a>
        <a href="https://www.instagram.com/netflix_in/?hl=en" target="_blank">
          <InstagramIcon
            className="social-media__icons"
            style={{ fontSize: "35px", marginLeft: "20px", color: "grey" }}
          />
        </a>
        <a href="https://twitter.com/NetflixIndia" target="_blank">
          {" "}
          <TwitterIcon
            className="social-media__icons"
            style={{ fontSize: "35px", marginLeft: "20px", color: "grey" }}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"
          target="_blank"
        >
          <YouTubeIcon
            className="social-media__icons"
            style={{ fontSize: "35px", marginLeft: "20px", color: "grey" }}
          />
        </a>
      </div>
      <div className="copyright">
        <p className="copyright_text">© 2021 Netflix, Akash-verma</p>
      </div>
    </footer>
  );
};

export default Footer;
