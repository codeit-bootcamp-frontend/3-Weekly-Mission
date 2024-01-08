import { useEffect, useState } from "react";
import { getLinkData } from "../../apis/api";
import Card from "../Card/Card";
import "./CardList.css";

function CardList() {
  const userId = 1;
  const [cardList, setCardList] = useState(null);

  useEffect(() => {
    const handleLoadCardList = async () => {
      const { data } = await getLinkData(userId);
      // console.log("data", data);

      setCardList(data);
    };

    handleLoadCardList();
  }, []);

  return (
    <div className="card-list">
      {cardList &&
        cardList.map((link) => <Card key={link.id} link={link}></Card>)}
    </div>
  );
}
export default CardList;
