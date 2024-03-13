import { Modal } from "@/hooks/useModal";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  state: Modal;
}

export default function NameChangeModal({ state }: Props) {
  return (
    <>
      <h2 className={cx("modal-title")}>폴더 이름 변경</h2>
      <input className={cx("modal-input")} placeholder={state["folderName"]} />
      <button className={cx("modal-submit-btn")}>변경하기</button>
    </>
  );
}
