import { calElapsedTime } from "@/utils/calElapsedTime";
import { calDate } from "@/utils/calDate";
import styles from "./Card.module.css";
import PopOver from "../../PopOver/PopOver";
import { useState } from "react";
import Image from "next/image";

interface Props {
  link: any;
  folderData: any[];
}
function Card({ link, folderData }: Props) {
  const [pop, setPop] = useState(false);
  console.log("link", link);

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
            <Image
              className={styles.kebabImg}
              src="/svgs/kebab-icon.svg"
              alt="kebab"
              width={20}
              height={20}
              onClick={() => {
                setPop(!pop);
              }}
            />
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
