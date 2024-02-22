// import { useFolderData } from "@/hooks/useFolderData";
import { useSampleFolderData } from "@/hooks/useSampleFolderData";
import styles from "./Header.module.css";
import Image from "next/image";
function Header() {
  const { folderData } = useSampleFolderData();
  return (
    <header className={styles.header}>
      <div className={styles.folderInfo}>
        <span className={styles.folderOwnerProfile}>
          <Image
            fill
            src={folderData?.owner?.profileImageSource}
            alt="folder-owner-profile-img"
          />
        </span>

        <span className={styles.folderOwnerName}>
          @{folderData?.owner?.name}
        </span>
        <span className={styles.folderName}>{folderData?.name}</span>
        {/* {loadingError?.message && <span>{loadingError.message}</span>} */}
      </div>
    </header>
  );
}

export default Header;
