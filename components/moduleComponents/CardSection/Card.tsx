import { createDay, createTime } from "../../../src/utils/shared";
import { useState } from "react";
import useUserLinkData from "../../../hook/useUserLinkData";
import Kebab from "../../atomicComponents/kebab/Kebab";
import { kebab_svg } from "@/public/image";
import { UserLinkType } from "../../../types/Types";
import Link from "next/link";
import styles from "./CardSection.module.css";
import Image from "next/image";

function CardList({ link }: { link: UserLinkType }) {
  const [kebab, setKebab] = useState(false);

  const kebabClick = () => {
    setKebab(!kebab);
  };
  return (
    <div key={link.id} className={styles.card_Box}>
      <div className={styles.imgBox}>
        <Link href={link.url as string} target="blank">
          {link.image_source ? (
            <img
              className={styles.link_Img}
              src={link.image_source}
              alt="링크 이미지"
            />
          ) : (
            <img
              className={styles.link_Img}
              src="/image/star.jpg"
              alt="별 이미지"
            />
          )}
        </Link>
      </div>
      <div className={styles.text_Box}>
        <span className={styles.time}>{createTime(link.created_at ?? "")}</span>
        <Image
          src={kebab_svg}
          alt="더보기"
          width={20}
          height={17}
          className={styles.케밥버튼}
          onClick={kebabClick}
        />
        {kebab && <Kebab link={link} />}
        <p className={styles.description}>{link.description}</p>
        <span className={styles.date}>{createDay(link.created_at ?? "")}</span>
      </div>
    </div>
  );
}

export default function Card({
  selectedFolderId,
}: {
  selectedFolderId?: number;
}) {
  const { linkData } = useUserLinkData(selectedFolderId!); //!인 이유는
  return (
    <>
      {linkData.map((link) => (
        <CardList key={link.id} link={link} />
      ))}
    </>
  );
}
