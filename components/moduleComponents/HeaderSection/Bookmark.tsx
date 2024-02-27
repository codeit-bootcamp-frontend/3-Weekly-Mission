import useUserProfileData from "../../../hook/useUserProfileData";
import styles from "./HeaderSection.module.css";
import Image from "next/image";

export default function Bookmark() {
  const { folderData } = useUserProfileData();

  if (folderData === null) return null;

  return (
    <div className={styles.header_Under}>
      {folderData.folder.owner && (
        <div className={styles.bookmark_Area}>
          <Image
            className={styles.user_Logo}
            src={folderData.folder.owner.profileImageSource}
            alt="codeit"
            width={60}
            height={60}
          />
          <p className={styles.user_Name}>@{folderData.folder.owner.name}</p>
          <p className={styles.bookmark_Text}>{folderData.folder.name}</p>
        </div>
      )}
    </div>
  );
}
