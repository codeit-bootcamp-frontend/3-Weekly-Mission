import { useModal } from "@/pages/folder/modal/Modal";
import CloseButton from "@/components/button/closeButton/CloseButton";
import styles from "./EditFolder.module.scss";
import Button from "@/components/button/Button";

export default function EditFolder() {
  const { handleClose } = useModal();

  const handleClick = () => {
    console.log("폴더 이름 변경");
  };

  return (
    <div className={styles.modal}>
      <CloseButton className={styles.closeButton} onClick={handleClose} />
      <h2 className={styles.title}>폴더 이름 변경</h2>
      <input className={styles.input} placeholder="내용 입력" />
      <Button className={styles.addButton} onClick={handleClick}>
        변경하기
      </Button>
    </div>
  );
}
