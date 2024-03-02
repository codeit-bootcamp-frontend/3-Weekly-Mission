import Navbar from "./Navbar";
import styles from "./Header.module.css";
import FetchFolderData from "../../api/FetchSampleFolderData";
import Image from "next/image";

function Header() {
  const folderData = FetchFolderData();
  const folderRoute = folderData?.folder;
  const imageUrl = folderRoute?.owner?.profileImageSource;
  const ownerName = folderRoute?.owner?.name;
  const folderName = folderRoute?.name;

  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.header_content}>
        <div>
          {imageUrl ? (
            <img
              className={styles.avatar_image}
              src={imageUrl}
              alt="아바타이미지"
              width={60}
              height={60}
            />
          ) : (
            <Image
              src={"/Avatar.png"}
              alt="기본 아바타 이미지"
              width={60}
              height={60}
            />
          )}
        </div>
        <div>@{ownerName}</div>
        <div className={styles.folder_name}>{folderName}</div>
      </div>
    </header>
  );
}

export default Header;
