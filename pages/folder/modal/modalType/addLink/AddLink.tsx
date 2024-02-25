import { useModal } from "@/pages/folder/modal/Modal";
import { useRouter } from "next/router";
import Button from "@/components/button/Button";
import styles from "./AddLink.module.scss";
import CloseButton from "@/components/button/closeButton/CloseButton";

export default function AddLink() {
  const router = useRouter();
  const { link } = router.query;

  const { handleClose } = useModal();

  const handleClick = () => {
    alert("링크 추가");
    handleClose();
  };

  return (
    <div className={styles.modal}>
      <CloseButton className={styles.closeButton} onClick={handleClose} />
      <h2 className={styles.title}>폴더에 추가</h2>
      <h3 className={styles.linkUrl}>{link}</h3>
      <div className={styles.folderList}>
        <div>코딩팁</div>
        <div>채용 사이트</div>
        <div>유용한 글</div>
      </div>
      <Button className={styles.addButton} onClick={handleClick}>
        추가하기
      </Button>
    </div>
  );
}
