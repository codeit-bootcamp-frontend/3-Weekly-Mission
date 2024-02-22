import React from "react";
import {TimeUtils} from "../../utils/times";

const SharedItem = ({item}) => {
  const {createdAt, description, imageSource, url} = item;
  const convertedTime = new TimeUtils(createdAt).getFormattedTime();
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
      <div className="folder-item">

        <a href={url}>
          <div className="folder-image-area"
               style={{backgroundImage: `url(${imageSource})`}}>
          </div>
        </a>

        <div className=" folder-info-area">
          <p className=" createdAt">{convertedTime}</p>
          <p className=" description">{description}</p>
          <p className=" date">{formattedDate}</p>
        </div>

      </div>
  )
}
export default SharedItem
