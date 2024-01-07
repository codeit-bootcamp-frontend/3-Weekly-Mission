import "./Main.css";
import Card from "../card/Card";

const Main = function () {
  return (
    <div className="Main">
      <div className="content-box">
        <input className="search-bar" placeholder="링크를 검색해 보세요." />
        <Card />
      </div>
    </div>
  );
};

export default Main;
