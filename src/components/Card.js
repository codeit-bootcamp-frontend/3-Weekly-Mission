import noImgLogo from "../assets/no-img-logo.svg";
import kebob from "../assets/kebab.png";
import calculateWhenItIsCreated from "../utils/calculateWhenItIsCreated";
import formatDate from "../utils/formatDate";
import "./Card.css";

export default function Card({ data }) {
  const { createdAt , created_at, url, description, imageSource, image_source, title } = data;
  const formattedDate = formatDate(createdAt || created_at);
  const timeAgo = calculateWhenItIsCreated(createdAt || created_at);

  const classNames = (imageSource || image_source) ? "card-img" : "card-img no-img";

  return (
    <a className="card" onClick={() => window.open(url, "_blank")}>
      <div className="card-img-container">
        <img
          className={classNames}
          src={imageSource || image_source || noImgLogo}
          alt={title}
        />
      </div>
      <div className="mention-wrapper">
        <p className="time-and-kebob-wrapper"><span className="upload-time-ago">{timeAgo}</span><button className="kebob-btn"></button></p>
        <p className="description">{description}</p>
        <p className="upload-date">{formattedDate}</p>
      </div>
    </a>
  );
}
