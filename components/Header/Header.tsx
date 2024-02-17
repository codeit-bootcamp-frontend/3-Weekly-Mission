import { useFolderData } from "../../hooks/useFolderData";
import styles from "./Header.module.css";
import Image from "next/image";
function Header() {
  const { folderData } = useFolderData();

  return (
    <header className={styles.header}>
      <div className={styles.folderInfo}>
        <Image
          className={styles.folderOwnerProfile}
          src={folderData?.folder?.owner?.profileImageSource}
          alt="folder-owner-profile-img"
          // 임시
          width={20}
          height={20}
        />
        <span className={styles.folderOwnerName}>
          @{folderData?.folder?.owner?.name}
        </span>
        <span className={styles.folderName}>{folderData?.folder?.name}</span>
        {/* {loadingError?.message && <span>{loadingError.message}</span>} */}
      </div>
    </header>
  );
}

export default Header;
