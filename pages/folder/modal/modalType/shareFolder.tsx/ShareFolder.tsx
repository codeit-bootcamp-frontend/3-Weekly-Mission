import { useRouter } from "next/router";
import { useModal } from "@/pages/folder/modal/Modal";
import { useEffect, useState } from "react";
import { getFolderInfoByFolderId } from "@/lib/api";
import CloseButton from "@/components/button/closeButton/CloseButton";
import styles from "./ShareFolder.module.scss";
import KakaoButton from "./shareButton/KakaoButton";
import FacebookButton from "./shareButton/FacebookButton";
import CopyLinkButton from "./shareButton/LinkCopyButton";

type Folder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
};

const initValue: Folder = {
  id: 0,
  created_at: "",
  name: "",
  user_id: 0,
  favorite: false,
};

export default function ShareFolder() {
  const [folder, setFolder] = useState<Folder>(initValue);
  const { handleClose } = useModal();

  const router = useRouter();
  const { folderId } = router.query;

  const shareUrl = `http://localhost:3000/shared?user=1&folder=${folderId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folder = await getFolderInfoByFolderId(folderId as string);
        if (!folder) return;
        setFolder(folder);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [folderId]);

  return (
    <div className={styles.modal}>
      <CloseButton className={styles.closeButton} onClick={handleClose} />
      <h2 className={styles.title}>폴더 공유</h2>
      <h3 className={styles.folderName}>{folder.name}</h3>
      <div className={styles.shareButton}>
        <KakaoButton folderName={folder.name} shareUrl={shareUrl} />
        <FacebookButton shareUrl={shareUrl} />
        <CopyLinkButton shareUrl={shareUrl} />
      </div>
    </div>
  );
}
