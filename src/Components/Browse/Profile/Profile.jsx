import userProfile from "../Nav/user.png";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../StateProvider/StateProvider";
import { auth } from "../../../firebase";
import "./profile.css";

const Profile = () => {
  let history = useHistory();

  const [{ myList, user }, dispatch] = useStateValue();

  const redirectToHome = () => {
    history.push("./");
  };

  const logOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="profile" style={{ color: "white" }}>
      <span className="profile__title">
        Who`s watching <span className="profile__netflix">Netflix</span> ?
      </span>
      <img className="profile__img" src={userProfile} />
      <span className="profile__name">{user?.displayName}</span>
      <span className="profile__email">{user?.email}</span>
      <span
        className="profile__logout"
        onClick={() => {
          logOut();
          redirectToHome();
        }}
      >
        Log Out
      </span>
    </div>
  );
};

export default Profile;
