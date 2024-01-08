import React from "react";
import { getCreateDay, getTimeDifference } from "../../utils/util";
import imageData from "../../utils/imageData";
import { Link } from "react-router-dom";
import styled from "./Card.module.css";
import Kebab from "../Kebab/Kebab";

export default function Card({ item, toggle }) {
  const { createdAt, description, imageSource, url, title } = item;

  const dateTimeString = createdAt;
  const timeAgo = getTimeDifference(dateTimeString);
  const createdDay = getCreateDay(dateTimeString);
  const imgAlt = `${title} 새창으로 바로가기 이미지`;
  const imgSource = imageSource ? imageSource : imageData.defaultImg;

  return (
    <>
      <Link to={url} rel="noreferrer noopener" target="_blank">
        <img className={styled["main-img"]} src={imgSource} alt={imgAlt} />
      </Link>
      {toggle && (
        <img
          className={styled.star}
          src={imageData.starIcon}
          alt="별모양 아이콘"
        />
      )}
      <div className={styled["card-info"]}>
        {toggle && <Kebab />}
        <span className={styled["time-ago"]}>{timeAgo}</span>
        <p className={styled.description}>{description}</p>
        <span className={styled["created-day"]}>{createdDay}</span>
      </div>
    </>
  );
}
