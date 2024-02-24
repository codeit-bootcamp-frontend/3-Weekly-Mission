import Image from "next/image";
import styles from "./Modal.module.css";
import kakao from "@/public/kakao_share.svg";
import facebook from "@/public/facebook_share.svg";
import linkIcon from "@/public/link.svg";

export default function ShareModal({ state }: any) {
  // 호스트주소/shared?user={현재 로그인 중인 유저ID}&folder={현재 열려있는 폴더ID}
  return (
    <>
      <h2
        className={`${styles["modal-title"]} ${styles["having-folder-and-link"]}`}
      >
        폴더 공유
      </h2>
      <h3 className={styles["link-and-folder-name"]}>{state["folderName"]}</h3>
      <div className={styles["share-icon-wrapper"]}>
        <button className={styles["share-icon-btn"]}>
          <div className={`${styles["img-container"]} ${styles["kakao"]}`}>
            <Image
              className={`${styles["share-icon"]}`}
              src={kakao}
              alt="kakao-icon"
            />
          </div>
          <span className={styles["share-icon-name"]}>카카오톡</span>
        </button>
        <button className={styles["share-icon-btn"]}>
          <div className={`${styles["img-container"]} ${styles["facebook"]}`}>
            <Image
              className={`${styles["share-icon"]}`}
              src={facebook}
              alt="facebook-icon"
            />
          </div>
          <span className={styles["share-icon-name"]}>페이스북</span>
        </button>
        <button className={styles["share-icon-btn"]}>
          <div className={`${styles["img-container"]} ${styles["link-icon"]}`}>
            <Image
              className={`${styles["share-icon"]}`}
              src={linkIcon}
              alt="link-icon"
            />
          </div>
          <span className={styles["share-icon-name"]}>링크 복사</span>
        </button>
      </div>
    </>
  );
}
