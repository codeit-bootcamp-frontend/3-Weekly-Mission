import { calElapsedTime } from "@/utils/calElapsedTime";
import { calDate } from "@/utils/calDate";
import styles from "./Card.module.css";
import PopOver from "../../PopOver/PopOver";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Folder, Link } from "@/@types/api/interface";
import DEFAULT_IMAGE from "@/public/svgs/no-img.svg";

interface Props {
  link: Link;
  folderData: Folder[] | null;
}
function Card({ link, folderData }: Props) {
  // const [pop, setPop] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const kebabButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  // const handleKebabClick = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   setIsPopoverOpen(true);
  // };
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
    console.log("outside 클릭!");
  }, []);

  return (
    <div
      className={styles.cardBox}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          backgroundImage: `url(${link.image_source ?? DEFAULT_IMAGE.src})`,
        }}
        className={`${styles.cardImgWrap} ${isHovered ? styles.zoomIn : ""}`}
        onClick={() => window.open(link.url)}
      ></div>

      <div className={styles.cardContent}>
        <div className={styles.contentTop}>
          <span className={styles.elapsedTime}>
            {calElapsedTime(link.created_at)}
          </span>
          <span className={styles.kebab}>
            <span
              className={styles.kebabImg}
              onClick={() => {
                setIsPopoverOpen(!isPopoverOpen);
              }}
            >
              <Image fill src="/svgs/kebab-icon.svg" alt="kebab" />
            </span>
            {isPopoverOpen && (
              <PopOver
                isOpen={isPopoverOpen}
                folderData={folderData}
                anchorRef={kebabButtonRef}
                // anchorPosition={popoverPosition}
                onBackgroundClick={handleBackgroundClick}
              />
            )}
          </span>
        </div>
        <div className={styles.contentText}>{link.title}</div>
        <div className={styles.createdDate}>{calDate(link.created_at)}</div>
      </div>
    </div>
  );
}

export default Card;
