/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styles from "../../styles/Shared.module.css";

export default function Section() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
        setUserId(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <>
      <div className={styles.sectionContainer}>
        {userId ? (
          <div className={styles.sectionContent}>
            <img
              className={styles.userProfileImg}
              src={userId.folder.owner.profileImageSource}
              alt="프로필 아이콘 이미지"
            />
            <span className={styles.userName}>{userId.folder.owner.name}</span>
            <span className={styles.favorite}>{userId.folder.name}</span>
          </div>
        ) : null}
      </div>
    </>
  );
}
