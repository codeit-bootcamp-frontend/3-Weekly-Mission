import Link from "next/link";
import Image from "next/image";
import getElapsedTime from "@/utils/calculateDate";
import styles from "@/styles/card.module.css";

interface SharedCardProps {
  link: SharedFolderLinksData;
}

function SharedCard({ link }: SharedCardProps) {
  const { title, description, url, imageSource, createdAt } = link;

  const timeAgo = getElapsedTime(createdAt);
  const createDate = createdAt
    .toString()
    .substring(0, 10)
    .replaceAll(/-/g, ". ");

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
          <time className={styles["creat-date"]}>{createDate}</time>
        </div>
      </Link>
    </li>
  );
}

export default SharedCard;
