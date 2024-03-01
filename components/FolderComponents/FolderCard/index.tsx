import Link from "next/link";
import Image from "next/image";
import getElapsedTime from "@/utils/calculateDate";
import styles from "@/styles/card.module.css";

interface CardProps {
  link: FolderLinksData;
}

function FolderCard({ link }: CardProps) {
  const { title, description, url, created_at, image_source } = link;

  const timeAgo = getElapsedTime(created_at);
  const createDate = created_at
    .toString()
    .substring(0, 10)
    .replaceAll(/-/g, ". ");

  return (
    <li className={styles.card} key={link.id}>
      <Link href={url} target="_blank">
        <div className={styles["card-imgbox"]}>
          <Image
            src={image_source ?? "/assets/defalutimg.png"}
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

export default FolderCard;
