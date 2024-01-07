import React from "react";
import { useState, useEffect } from "react";
import { UserLink } from "../../api/api.js";
import { DateDiff, showCreatedAt } from "../../utils/dateUtils.js";
import "./Card.css";

export default function Card({ selected }) {
  const [cards, setCards] = useState([]);
  const openNewTab = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    async function cardData() {
      if (selected === "$1") {
        const { data } = await UserLink(1);
        setCards(data);
      } else {
        const { id } = selected;
        const { data } = await UserLink(1, id);
        setCards(data);
      }
    }
    cardData();
  }, [selected]);
  console.log(cards);

  return (
    <ul className="contents">
      {cards.length > 0 ? (
        cards.map(({ createdAt, link, id, description, img }) => {
          const currentToDate = DateDiff(createdAt);
          const showcreatedDate = showCreatedAt(createdAt);
          const openLink = () => openNewTab(link);

          return (
            <li className="contents-card" onClick={openLink} key={id}>
              <div className="contents-card-box">
                <img
                  className="contents-card-box-image"
                  src={img || "../images/wrong-link.png"}
                  alt="없을 때 사진"
                />
                <img
                  className="contents-card-box-bookmark"
                  src="./images/bookmark.png"
                  alt="즐겨찾기 아이콘 이미지"
                />
              </div>
              <div className="contents-card-box-detail">
                <div className="contents-card-box-change">
                  <p className="current-to-created">{currentToDate}</p>
                  <img src="./images/edit.png" alt="파일 수정 이미지" />
                </div>
                <p className="descriptions">{description}</p>
                <p className="show-date">{showcreatedDate}</p>
              </div>
            </li>
          );
        })
      ) : (
        <div className="no-data">
          <p>저장된 링크가 없습니다</p>
          <img src="./images/" alt="링크 추가 이미지" />
        </div>
      )}
    </ul>
  );
}
