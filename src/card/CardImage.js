import "./CardImage.css";

const CardImage = function ({ isHovered, imageSource }) {
  return (
    <img
      className={isHovered ? "CardImage zoomedCardImage" : "CardImage"}
      src={imageSource}
    />
  );
};

export default CardImage;
