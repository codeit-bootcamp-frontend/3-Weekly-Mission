import React, { useEffect, useState } from "react";
import "./SharedPage.css";
import imageData from "../utils/imageData";
import CardList from "../components/CardList/CardList";
import { getShredCardList } from "../apis/api";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";

export default function SharedPage() {
  const [cardListItem, setCardListItem] = useState(null);
  const [folderOwner, setFolderOwner] = useState(null);
  const [folderName, setFolderName] = useState("");
  const handleGetCardList = async () => {
    let result;
    try {
      result = await getShredCardList();
    } catch (error) {
      console.log(error);
      return;
    }
    const { folder } = result;
    const { links, owner, name } = folder;
    setCardListItem(links);
    setFolderOwner(owner);
    setFolderName(name);
  };

  useEffect(() => {
    handleGetCardList();
  }, []);

  return (
    <main>
      {folderOwner ? (
        <SharedHeader folderName={folderName} folderOwner={folderOwner} />
      ) : null}

      <div className="shared-card-board">
        <LinkSearchForm />
        {cardListItem ? (
          <CardList itemList={cardListItem} toggle={false} />
        ) : null}
      </div>
    </main>
  );
}

function SharedHeader({ folderOwner, folderName }) {
  const ownerName = folderOwner.name ? folderOwner.name : null;
  const source = folderOwner.profileImageSource
    ? folderOwner.profileImageSource
    : null;
  return (
    <div className="shared-header">
      {source ? (
        <img className="user-profile-img" src={source} alt="유저이미지" />
      ) : (
        <div className="codeit-img-background">
          <img src={imageData.codeitLogo} alt="코드잇 로고 이미지" />
        </div>
      )}

      <span>{ownerName}</span>
      <h2>{folderName}</h2>
    </div>
  );
}
