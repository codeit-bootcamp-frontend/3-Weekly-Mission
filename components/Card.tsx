import useModal from "../hooks/useModal";
import calculateElapsedTimeSinceCreation from "../utils/calculateElapsedTimeSinceCreation";
import formatDate from "../utils/formatDate";
import styles from "./Card.module.css";
import { useState } from "react";
import Modal from "./modals/Modal";
import { Links } from "@/hooks/useGetFolder";
import { UserFolderData } from "@/hooks/useGetUserFolder";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";

interface Props {
  data: UserFolderData & Links;
}

const cx = classNames.bind(styles);

export default function Card({ data: folderLink }: Props) {
  const {
    createdAt,
    created_at,
    url,
    description,
    imageSource,
    image_source,
    title,
  } = folderLink;
  const formattedDate = formatDate(createdAt || created_at);
  const timeAgo = calculateElapsedTimeSinceCreation(createdAt || created_at);
  const imageUrl = imageSource || image_source || null;
  const [popoverState, setPopoverState] = useState(false);
  const [modalState, setModalState, handleModalCancel] = useModal();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Link
        className={cx("card", { "card-hover": isHover })}
        href={url}
        target="_blank"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <>
          <Modal state={modalState} onClick={handleModalCancel} />
          <div className={styles["card-img-container"]}>
            <div className={cx("card-img", { "no-img": !imageUrl })}>
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
              {created_at && (
                <button
                  className={styles["kebab-btn"]}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPopoverState(!popoverState);
                  }}
                />
              )}
            </p>
            {popoverState ? (
              <div
                className={styles["popover"]}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setIsHover(false);
                }}
              >
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
