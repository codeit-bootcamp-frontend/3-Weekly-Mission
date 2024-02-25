import { useEffect, useState } from "react";
import { getFolderInfoByFolderId } from "@/lib/api";
import { useRouter } from "next/router";
import styles from "./FolderMenu.module.scss";
import FolderSelector from "./folderSelector/FolderSelector";
import AddFolderButton from "./addFolderButton/AddFolderButton";
import FloatingActionButton from "./addFolderButton/FloatingActionButton";
import FolderEditor from "./folderEditor/FolderEditor";

export default function FolderMenu() {
  const [currentFolderName, setCurrentFolderName] = useState<string>("전체");

  const router = useRouter();
  const { folderId } = router.query;

  const isEditable = currentFolderName !== "전체";
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767;

  const handleFolderClick = (folderName: string) => {
    setCurrentFolderName(folderName);
  };

  useEffect(() => {
    if (!folderId) return;

    const fetchData = async () => {
      try {
        const folder = await getFolderInfoByFolderId(folderId as string);
        if (!folder) return;
        setCurrentFolderName(folder.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [folderId]);

  return (
    <>
      <div className={styles.upperMenu}>
        <FolderSelector
          className={styles.folderSelector}
          onClick={handleFolderClick}
        />
        {isMobile ? (
          <FloatingActionButton className={styles.addFolderFAB} />
        ) : (
          <AddFolderButton />
        )}
      </div>
      <div className={styles.folderOption}>
        <h2 className={styles.title}>{currentFolderName}</h2>
        {isEditable && <FolderEditor />}
      </div>
    </>
  );
}
