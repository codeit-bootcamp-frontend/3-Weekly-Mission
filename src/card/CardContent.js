import "./CardContent.css";

const CardContent = function ({ elapsedTime, description, createdAt }) {
  return (
    <div className="CardContent">
      <div className="elapsedTime">{elapsedTime}</div>
      <div className="description">{description}</div>
      <div className="createdDate">{createdAt}</div>
    </div>
  );
};

export default CardContent;
