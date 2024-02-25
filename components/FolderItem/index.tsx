import { formatDate, afterTimeDate } from "@/lib/utils";
import { MouseEvent } from "react";
import { FolderLink } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./FolderItem.module.css";

interface FolderItemProps {
  link: FolderLink;
}

const FolderItem = ({ link }: FolderItemProps) => {
  const { created_at, url, title, description, image_source } = link;

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(url);
  };

  return (
    <Link href={url} className={styles["FolderItem-link-box"]} onClick={handleLinkClick}>
      <div className={styles["link-image-box"]}>
        {image_source ? (
          <div className={styles["link-image"]}>
            <Image fill src={image_source} alt={title ?? "이미지 제목"} />
          </div>
        ) : (
          <div className={styles["link-image"]}>
            <Image fill src="/assets/no-image.png" alt={title ?? "이미지 없음"} />
          </div>
        )}
      </div>
      <div className={styles["link-description-box"]}>
        <div className={styles["written-date"]}>{afterTimeDate(created_at)}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles["format-date"]}>{formatDate(created_at)}</div>
      </div>
      <div className={styles.kebab}>
        <Image fill src="/assets/kebab.svg" alt="삭제하기와 폴더 추가 기능이 있는 케밥 아이콘" />
      </div>
      <div className={styles.star}>
        <Image fill src="/assets/star.svg" alt="즐겨찾기 아이콘" />
      </div>
    </Link>
  );
};

export default FolderItem;
