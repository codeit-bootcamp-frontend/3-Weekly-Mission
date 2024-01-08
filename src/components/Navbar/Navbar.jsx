import "./Navbar.css";
import imageData from "../../utils/imageData";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to={"/"}>
          <img
            src={imageData.logoImg}
            className="logo"
            alt="홈으로 이동하는 로고"
          />
        </Link>

        {user ? (
          <NavProfile user={user} />
        ) : (
          <Link to={"/"}>
            <button type="button" className="login-btn">
              로그인
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

function NavProfile({ user }) {
  const userEmail = user.email;
  const source = user.profileImageSource;

  return (
    <div className="userProfile">
      {source ? (
        <img className="profile-img" src={source} alt="프로필 사진" />
      ) : (
        <div className="profile-default-img">
          <img src={imageData.defaultProfileImg} alt="프로필 사진" />
        </div>
      )}

      <span className="userName">{userEmail}</span>
    </div>
  );
}
