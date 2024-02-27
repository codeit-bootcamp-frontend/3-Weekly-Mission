import React from "react";
import styles from "./ModalMessage.module.css";

export const SnsIcon = () => {
  return (
    <div className={styles.sns_wrapper}>
      <div className={styles.sns_img_box}>
        <div className={`${styles.kakao_img_color} ${styles.style_wrapper}`}>
          <img src="/image/kakao.svg" alt="kakaoShare" />
        </div>
        <span>카카오톡</span>
      </div>
      <div className={styles.sns_img_box}>
        <div className={`${styles.facebook_img_color} ${styles.style_wrapper}`}>
          <img src="/image/facebook.svg" alt="facebookShare" />
        </div>
        <span>페이스북</span>
      </div>
      <div className={styles.sns_img_box}>
        <div className={`${styles.link_img_color} ${styles.style_wrapper}`}>
          <img src="/image/link.svg" alt="linkShare" />
        </div>
        <span>링크 복사</span>
      </div>
    </div>
  );
};
