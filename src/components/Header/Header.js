import { useState, useEffect } from "react";
import { CODEIT_API } from "../../assets/url";
import "./Header.css";
import logoImg from "../../assets/logo.svg";
import styled from "styled-components";

const STYLED_HEADER = styled.header`
  position: ${(props) => (props.$notFixed ? "static" : "fixed")};
`;

function Header({ notFixed }) {
  const [userInfo, setUserInfo] = useState(); //로그인정보 유무로 각각 로그인버튼/프로필정보 출력
  const invisible = { display: "none" };
  const visible = { display: "inherit" };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${CODEIT_API}/users/1`);
      const data = await response.json();
      setUserInfo(data);
    };

    fetchData();
  }, []);

  if (!userInfo) {
    //api에서 데이터 미수신시 렌더링 방지
    return null;
  }

  return (
    <STYLED_HEADER $notFixed={notFixed}>
      <div className="header-son">
        <a href="/">
          <img src={logoImg} alt="로고" />
        </a>
        <a
          className="login-button"
          href="./signin/signin.html"
          style={userInfo["data"][0]["id"] !== 1 ? visible : invisible}
        >
          로그인
        </a>
        <div
          className="user-info"
          style={userInfo["data"][0]["id"] === 1 ? visible : invisible}
        >
          <img src={userInfo["data"][0]["image_source"]} alt="profile" />
          <h6>{userInfo["data"][0]["email"]}</h6>
        </div>
      </div>
    </STYLED_HEADER>
  );
}

export default Header;
