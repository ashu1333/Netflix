import userProfile from "../Nav/user.png";
import "./profile.css";
const Profile = () => {
  const logOut = () => {};
  const redirectToHome = () => {};
  return (
    <div className="profile" style={{ color: "white" }}>
      <span className="profile__title">
        Who`s watching <span className="profile__netflix">Netflix</span> ?
      </span>
      <img className="profile__img" src={userProfile} />
      <span className="profile__name">{"user?.displayName"}</span>
      <span className="profile__email">{"user?.email"}</span>
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
