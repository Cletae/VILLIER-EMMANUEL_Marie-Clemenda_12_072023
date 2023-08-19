import { useNavigate } from "react-router-dom";

import logo from "../assets/user_btn.png";

const Profile = () => {
  const navigate = useNavigate();

  const SetUserToken = (user, id) => {
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", id);
    navigate(`/${user}/${id}`);
  };

  return (
    <div className="userSelection-container">
      <nav className="userSelection">
        <h1 className="userSelection_title">Choix de l'utilisateur</h1>
        <ul className="userSelection_list">
          {/* Je crée un lien vers la page de l'utilisateur en utilisant le composant Link de React Router */}
          <li
            className="userSelection_list-item"
            onClick={() => {
              SetUserToken("user", 12);
            }}
          >
            <span className="userName">Karl</span>
            <img className="user-btn" src={logo} alt="user logo" />
          </li>
          <li
            className="userSelection_list-item"
            onClick={() => {
              SetUserToken("user", 18);
            }}
          >
            <span className="userName">Cecilia</span>
            <img className="user-btn" src={logo} alt="user logo" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
