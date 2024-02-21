/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { formatDateString, calcTime } from "./TimeUtils";
import styles from "../../styles/Shared.module.css";

export default function Card({ data }) {
  const formatDate = formatDateString(data.createdAt);
  const [emptyImg, setEmptyImg] = useState("");
  const [ago, setAgo] = useState("");
  const createdTime = calcTime(data.createdAt);

  useEffect(() => {
    if (data.imageSource === undefined) {
      setEmptyImg("/assets/Images/tag.png");
    } else {
      setEmptyImg(data.imageSource);
    }
  }, [data.imageSource, emptyImg]);

  useEffect(() => {
    if (createdTime < 2) {
      setAgo("1 minute ago");
    } else if (createdTime <= 59) {
      setAgo(`${createdTime} minutes ago`);
    } else if (createdTime / 60 <= 23) {
      setAgo(`${Math.ceil(createdTime / 60)} hour ago`);
    } else if (createdTime / 60 >= 24 && createdTime / 60 / 24 < 2) {
      setAgo(`1 day ago`);
    } else if (createdTime / 60 / 24 >= 2 && createdTime / 60 / 24 <= 30) {
      setAgo(`${Math.ceil(createdTime / 60 / 24)} days ago`);
    } else if (createdTime / 60 / 24 > 30 && createdTime / 60 / 24 <= 60) {
      setAgo(`1 month ago`);
    } else if (createdTime / 60 / 24 > 60 && createdTime / 60 / 24 <= 365) {
      setAgo(`${Math.ceil(createdTime / 60 / 24 / 30)} months ago`);
    } else if (createdTime / 60 / 24 > 365 && createdTime / 60 / 24 <= 730) {
      setAgo(`1 year ago`);
    } else {
      setAgo(`${Math.ceil(createdTime / 60 / 24 / 365)} years ago`);
    }
  }, [createdTime]);

  return (
    <div className={`${styles.card} ${styles.card["data.id"]}`}>
      <Link href={data.url} passHref>
        <span target="_blank" rel="noopener noreferrer">
          {" "}
          <div className={styles.cardWrapper}>
            {data.imageSource === undefined ? (
              <>
                <img
                  src={"/assets/Icons/logo.svg"}
                  alt="로고 아이콘 이미지"
                  className={styles.emptyImg}
                />
              </>
            ) : (
              <img src={`${emptyImg}`} alt={`${data.title}`} />
            )}
          </div>
          <div className={styles.cardText}>
            <p className={styles.ago}>{`${ago}`}</p>
            <p className={styles.description}>{`${data.description}`}</p>
            <p className={styles.cardDate}>{`${formatDate}`}</p>
          </div>
        </span>
      </Link>
    </div>
  );
}
