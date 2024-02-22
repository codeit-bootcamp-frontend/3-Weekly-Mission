import useModal from "../hooks/useModal";
import calculateElapsedTimeSinceCreation from "../utils/calculateElapsedTimeSinceCreation";
import formatDate from "../utils/formatDate";
import styles from "./Card.module.css";
import { useState } from "react";
import Modal from "./Modal";
import { Links } from "@/hooks/useGetFolder";
import { Data } from "@/hooks/useGetUserFolder";
import Link from "next/link";
import Image from "next/image";

interface Props {
  data: Data & Links;
}
export default function Card({ data }: Props) {
  const {
    createdAt,
    created_at,
    url,
    description,
    imageSource,
    image_source,
    title,
  } = data;
  const formattedDate = formatDate(createdAt || created_at);
  const timeAgo = calculateElapsedTimeSinceCreation(createdAt || created_at);
  const imageUrl = imageSource || image_source || null;
  const [popoverState, setPopoverState] = useState(false);
  const [modalState, setModalState, handleModalCancel] = useModal();

  return (
    <>
      <Link className={styles.card} href={url} target="_blank">
        <>
          <Modal
            state={modalState}
            onClick={handleModalCancel}
            link={undefined}
          />
          <div className={styles["card-img-container"]}>
            <div
              className={
                imageUrl
                  ? `${styles[`card-img`]}`
                  : `${styles["card-img"]} ${styles["no-img"]}`
              }
            >
              <Image
                fill
                src={imageSource || image_source || "/no-img-logo.svg"}
                alt={title}
              />
            </div>
          </div>
          <div className={styles["mention-wrapper"]}>
            <p className={styles["time-and-kebob-wrapper"]}>
              <span className={styles["upload-time-ago"]}>{timeAgo}</span>
              <button
                className={styles["kebab-btn"]}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setPopoverState(!popoverState);
                }}
              />
            </p>
            {popoverState ? (
              <div className={styles["popover"]}>
                <button
                  className={styles["popover-btn"]}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setModalState({ state: true, target: "삭제하기", url });
                  }}
                >
                  삭제하기
                </button>
                <button
                  className={styles["popover-btn"]}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setModalState({ state: true, target: "폴더에 추가", url });
                  }}
                >
                  폴더에 추가
                </button>
              </div>
            ) : (
              ""
            )}
            <p className={styles["description"]}>{description}</p>
            <p className={styles["upload-date"]}>{formattedDate}</p>
          </div>
        </>
      </Link>
    </>
  );
}
