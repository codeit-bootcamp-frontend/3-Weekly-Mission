import "./Header.css";

const Header = function () {
  return (
    <div className="header">
      <nav>
        <img src="/img/logo.svg" alt="Linkbrary 로고" />
        <button className="cta cta-short">로그인</button>
      </nav>
    </div>
  );
};

export default Header;
