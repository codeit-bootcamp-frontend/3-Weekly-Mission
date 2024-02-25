import { ReactElement } from "react";
import { useModal } from "@/pages/folder/modal/Modal";
import style from "./AddFolder.module.scss";
import Button from "@/components/button/Button";
import CloseButton from "@/components/button/closeButton/CloseButton";

export default function AddFolder(): ReactElement {
  const { handleClose } = useModal();

  const handleClick = () => {
    console.log("추가하기");
  };

  return (
    <div className={style.modal}>
      <CloseButton className={style.closeButton} onClick={handleClose} />
      <h2 className={style.title}>폴더 추가</h2>
      <input className={style.input} placeholder="내용 입력" />
      <Button className={style.addButton} onClick={handleClick}>
        추가하기
      </Button>
    </div>
  );
}
