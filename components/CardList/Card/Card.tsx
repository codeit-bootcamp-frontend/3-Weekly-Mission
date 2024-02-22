import { calElapsedTime } from "@/utils/calElapsedTime";
import { calDate } from "@/utils/calDate";
import styles from "./Card.module.css";
import PopOver from "../../PopOver/PopOver";
import { useState } from "react";
import Image from "next/image";
import { Folder, Link } from "@/api/api";

interface Props {
  link: Link;
  folderData: Folder[] | null;
}
function Card({ link, folderData }: Props) {
  const [pop, setPop] = useState(false);

  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImgWrap} onClick={() => window.open(link.url)}>
        {link.image_source ? (
          <Image
            fill
            className={styles.cardImg}
            src={link.image_source}
            alt="Image"
          />
        ) : (
          <Image
            fill
            className={styles.cardImg}
            src="/svgs/no-img.svg"
            alt="Image"
          />
        )}
      </div>

      <div className={styles.cardContent}>
        <div className={styles.contentTop}>
          <span className={styles.elapsedTime}>
            {calElapsedTime(link.created_at)}
          </span>
          <span className={styles.kebab}>
            <span className={styles.kebabImg}>
              <Image
                fill
                src="/svgs/kebab-icon.svg"
                alt="kebab"
                onClick={() => {
                  setPop(!pop);
                }}
              />
            </span>
            {pop && <PopOver folderData={folderData} />}
          </span>
        </div>
        <div className={styles.contentText}>{link.title}</div>
        <div className={styles.createdDate}>{calDate(link.created_at)}</div>
      </div>
    </div>
  );
}

export default Card;
