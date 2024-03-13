import { Modal } from "@/hooks/useModal";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface Props {
  state: Modal;
}
export default function LinkDeleteModal({ state }: Props) {
  return (
    <>
      <h2 className={cx("modal-title", "having-folder-and-link")}>링크 삭제</h2>
      <h3 className={cx("link-and-folder-name")}>{state["url"]}</h3>
      <button className={cx("modal-submit-btn", "modal-delete-btn")}>
        삭제하기
      </button>
    </>
  );
}
