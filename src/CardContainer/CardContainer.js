import "./CardContainer.css";
import CardList from "../components/CardList/CardList";
import { useEffect, useState } from "react";
import { getFolderData } from "../api/api";

const CardContainer = () => {
  const [cardData, setCardData] = useState({
    folder: { links: [{ id: "", createdAt: "", description: "", url: "" }] },
  });

  const handleOneCardData = async () => {
    const card = await getFolderData();
    setCardData(card);
  };

  useEffect(() => {
    handleOneCardData();
  }, []);
  return (
    <div className="cardContainer">
      <CardList cardList={cardData.folder.links}></CardList>
    </div>
  );
};
export default CardContainer;
