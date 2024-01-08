import logo from "../assets/logo.svg";
import "./Header.css";
import { getUser } from "../api";
import useGetUserAsync from "../hooks/useGetUserAsync";

export default function Header({page}) {
  const [profileImageSource, email] = useGetUserAsync(getUser);
  
  return (
    <>
      <div className={page==="folder" ? "nav-folder-bg": "nav-bg"}></div>
      <header className={page==="folder" ? "nav-folder" : "nav"} >
        <img src={logo} className="logo" alt="logo" />
        <div className="profile-wrapper">
          <img
            className="profile-img"
            src={profileImageSource}
            alt="profile-img"
          />
          <span className="profile-email">{email ?? "로그인"}</span>
        </div>
      </header>
    </>
  );
}
