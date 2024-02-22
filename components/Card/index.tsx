import Link from "next/link";
import Image from "next/image";
import getElapsedTime from "@/utils/calculateDate";
import styles from "./style.module.css";
import { FolderLinksData } from "@/pages/shared";

interface CardProps {
  link: FolderLinksData;
}

function Card({ link }: CardProps) {
  const { title, description, url, imageSource, createdAt } = link;

  const timeAgo = getElapsedTime(createdAt);
  const creatDate = createdAt
    .toString()
    .substring(0, 10)
    .replaceAll(/-/g, ". ");

  console.log(link);

  return (
    <li className={styles.card} key={link.id}>
      <Link href={url} target="_blank">
        <div className={styles["card-imgbox"]}>
          <Image
            src={imageSource ?? "/assets/defalutimg.png"}
            alt={title}
            width={320}
            height={200}
          />
        </div>
        <div className={styles["card-content"]}>
          <time className={styles["time-ago"]}>{timeAgo}</time>
          <p>{description}</p>
          <time className={styles["creat-date"]}>{creatDate}</time>
        </div>
      </Link>
    </li>
  );
}

export default Card;
