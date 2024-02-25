import { useRouter } from "next/router";
import { ModalType } from "../../modal/Modal";
import styles from "./FolderEditor.module.scss";
import ImageButton from "@/components/button/imageButton/ImageButton";

export default function FolderEditor() {
  const router = useRouter();
  const { folderId } = router.query;

  const handleClick = (e: any) => {
    const modalType = e.target.value;
    folderId
      ? router.push(`${router.asPath}&type=${modalType}`)
      : router.push(`${router.pathname}?type=${modalType}`);
  };

  return (
    <div className={styles.folderEditor}>
      <ImageButton
        className={styles.editor}
        src="/assets/share.png"
        alt="폴더 공유"
        width={18}
        height={18}
        value={ModalType.SHARE_FOLDER}
        onClick={handleClick}
      >
        공유
      </ImageButton>
      <ImageButton
        className={styles.editor}
        src="/assets/pen.png"
        alt="폴더 이름 변경"
        width={18}
        height={18}
        value={ModalType.EDIT_FOLDER}
        onClick={handleClick}
      >
        이름 변경
      </ImageButton>
      <ImageButton
        className={styles.editor}
        src="/assets/delete.png"
        alt="폴더 삭제"
        width={18}
        height={18}
        value={ModalType.DELETE_FOLDER}
        onClick={handleClick}
      >
        삭제
      </ImageButton>
    </div>
  );
}
