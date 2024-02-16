import Search from "./Search";
import Card from "./Card";
import "./CardSection.css";

export default function CardSection() {
  return (
    <div className="mainArea">
      <div className="mainBOX">
        <Search />
        <div className="linkImgBox">
          <Card />
        </div>
      </div>
    </div>
  );
}
