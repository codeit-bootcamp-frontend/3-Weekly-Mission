import CardImage from "./CardImage";
import CardContent from "./CardContent";
import "./Card.css";
import { useState } from "react";

const Card = function () {
  const createdAt = new Date().toLocaleDateString();

  const [isHovered, setIsHoverd] = useState(false);
  const [date, setDate] = useState(createdAt);

  const handleMouseOver = () => setIsHoverd(true);
  const handleMouseLeave = () => setIsHoverd(false);

  const imageSource = "/img/catImage.png";

  const description =
    "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. TldkdLorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd";
  const elapsedTime = "10minutes ago";

  return (
    <div
      className={isHovered ? "Card Hovered" : "Card"}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}>
      <CardImage isHovered={isHovered} imageSource={imageSource} />
      <CardContent
        elapsedTime={elapsedTime}
        description={description}
        createdAt={date}
      />
    </div>
  );
};

export default Card;
