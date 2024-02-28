import { formatDate, afterTimeDate } from "@/lib/utils";
import { SampleFolderLink } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./SharedLinks.module.css";

interface SharedLinksProps {
  sharedPageLinks: SampleFolderLink[];
  className?: string;
}

const SharedLinks = ({ sharedPageLinks, className = "" }: SharedLinksProps) => {
  const classNames = `SharedLinks ${className}`;
  return (
    <ul className={classNames}>
      {sharedPageLinks &&
        sharedPageLinks.map((link: SampleFolderLink) => (
          <li key={link.id}>
            <SharedLinkCard link={link} />
          </li>
        ))}
    </ul>
  );
};

interface SharedLinkCardProps {
  link: SampleFolderLink;
}

const SharedLinkCard = ({ link }: SharedLinkCardProps) => {
  const { createdAt, url, title, description, imageSource } = link;

  return (
    <Link href={url} className={styles["shared-link-box"]}>
      <div className={styles["link-image-box"]}>
        {imageSource ? (
          <div className={styles["link-image"]}>
            <Image fill src={imageSource} alt={title ?? "이미지 제목"} />
          </div>
        ) : (
          <div className={styles["link-image"]}>
            <Image fill src="/assets/no-image.png" alt={title ?? "이미지 없음"} />
          </div>
        )}
      </div>
      <div className={styles["link-description-box"]}>
        <div className={styles["written-date"]}>{afterTimeDate(createdAt)}</div>
        <div className={styles["description"]}>{description}</div>
        <div className={styles["format-date"]}>{formatDate(createdAt)}</div>
      </div>
    </Link>
  );
};

export default SharedLinks;
