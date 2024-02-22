import { useEffect, useState } from "react";
import getSampleFolder from "@/api/getSampleFolder";
import Image from "next/image";
import styles from "./style.module.css";

interface SharedTitlebarProps {
  owner: string;
  profileImg: string;
  folderName: string;
}

function SharedTitlebar({
  owner,
  profileImg,
  folderName,
}: SharedTitlebarProps) {
  return (
    <section className={styles["titlebar-section"]}>
      <Image
        src={profileImg}
        alt="폴더 주인 프로필 이미지"
        width={60}
        height={60}
      />
      <p>@{owner}</p>
      <h2>{folderName}</h2>
    </section>
  );
}

export default SharedTitlebar;
