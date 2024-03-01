import Image from "next/image";
import styles from "@/styles/titlebar.module.css";

interface SharedTitlebarProps {
  owner: string;
  profileImg: string;
  folderName: string;
}

export default function SharedTitlebar({
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
