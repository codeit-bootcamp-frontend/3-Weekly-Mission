import { useModal } from "../../Modal";
import { useRouter } from "next/router";
import CloseButton from "@/components/button/closeButton/CloseButton";
import styles from "./DeleteLink.module.scss";
import Button from "@/components/button/Button";

export default function DeleteLinkModal() {
  const router = useRouter();
  const { link } = router.query;

  const { handleClose } = useModal();

  const handleClick = () => {
    alert("링크 삭제");
    handleClose();
  };
  return (
    <div className={styles.modal}>
      <CloseButton className={styles.closeButton} onClick={handleClose} />
      <h2 className={styles.title}>링크 삭제</h2>
      <h3 className={styles.linkUrl}>{link}</h3>
      <Button className={styles.deleteButton} onClick={handleClick}>
        삭제하기
      </Button>
    </div>
  );
}
