import React from "react";
import { useState, useEffect } from "react";
import { UserProfile } from "../../api/api.js";
import "./NavBar.css";

function NavBarProfile() {
  const [user, setuser] = useState();

  useEffect(() => {
    const navBarLogin = async () => {
      const { data } = await UserProfile(1);
      const [profiles] = data;
      setuser(profiles);
    };

    navBarLogin();
  }, []);

  return (
    <a href="./folder" className="navbar-login">
      {user ? (
        <>
          <img
            className="navbar-login-profile"
            src={user.image.source}
            alt="사용자 프로필 이미지"
          />
          <span className="navbar-login-email">{user.email}</span>
        </>
      ) : (
        <img src="./images/login.png" alt="로그인 버튼 이미지" />
      )}
    </a>
  );
}

export default function NavBar() {
  const [appearance, setAppearance] = useState(true);

  useEffect(() => {
    let locationBefore = window.scrollY;

    const scrollFunc = () => {
      const locationNow = window.scrollY;
      setAppearance(locationBefore > locationNow);
      locationBefore = locationNow;
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <nav className={appearance ? "appearance" : "hide"}>
      <div className="contents">
        <a href="./folder">
          <img
            className="contents-logo"
            src="./images/logo.svg"
            alt="로고 이미지"
          />
        </a>
        <NavBarProfile />
      </div>
    </nav>
  );
}
