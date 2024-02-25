import styles from "./Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function AddLinkModal({ state, data: folderList, link }: any) {
  return (
    <>
      <h2 className={cx("modal-title", "having-folder-and-link")}>
        폴더에 추가
      </h2>
      <h3 className={cx("link-and-folder-name")}>{state["url"] ?? link}</h3>
      <div className={cx("folder-item-wrapper")}>
        {folderList.map((folder: any) => (
          <div key={folder?.id} className={cx("folder-item")}>
            <span className={cx("link-name")}>{folder?.name}</span>
            <span className={cx("link-length")}>
              {folder?.link?.count}개 링크
            </span>
          </div>
        ))}
      </div>
      <button className={cx("modal-submit-btn")}>추가하기</button>
    </>
  );
}
