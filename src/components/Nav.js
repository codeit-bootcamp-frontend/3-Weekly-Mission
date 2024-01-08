import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api.js";
import "./Nav.css";

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      if (isScrollingUp) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <nav className={`${visible ? "visible" : "hidden"}`}>
      <div className="nav-contents">
        <a href="./folder">
          <img
            className="header-logo-img"
            src="/imgs/logo.png"
            alt="코드잇로고"
          ></img>
        </a>
        <UserProfileInHeader />
      </div>
    </nav>
  );
}

function UserProfileInHeader() {
  const [user, setUser] = useState();
  useEffect(() => {
    async function handleLoginProfile() {
      const { data } = await getUserProfile(1);
      const [userProfile] = data;
      setUser(userProfile);
    }
    handleLoginProfile();
  }, []);
  return (
    <a href="./folder" className="user-profile-login">
      {user ? (
        <>
          <img
            className="user-profile-login-img"
            src={user.image_source}
            alt="사용자 이미지"
          ></img>
          <span className="user-profile-login-email">{user.email}</span>
        </>
      ) : (
        <img src="/imgs/로그인.png" alt="로그인" />
      )}
    </a>
  );
}
