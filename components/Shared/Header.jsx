/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styles from "../../styles/Shared.module.css";
import Link from "next/link";

export default function Header() {
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => response.json())
      .then((data) => {
        setProfileId(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return (
    <>
      <nav>
        <div className={styles.box}>
          <Link href="/">
            <img src="/assets/Icons/logo.svg" alt="홈 아이콘 이미지" />
          </Link>
          {profileId ? (
            <div className={styles.profileBox}>
              <img
                className={styles.userProfileImg}
                src={profileId.profileImageSource}
                alt="프로필 아이콘 이미지"
              />
              <div className={styles.profileText}>
                <span>{profileId.email}</span>
              </div>
            </div>
          ) : (
            <Link className={`${styles.cta} ${styles["cta-short"]}`} href="/">
              <span>로그인</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
