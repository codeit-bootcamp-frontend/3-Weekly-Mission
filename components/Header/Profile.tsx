import Image from "next/image";
import FetchSampleUserData from "../../api/FetchSampleUserData";
// import profileImage from "../../public/profileImg.png";
import styles from "./Profile.module.css";

function Profile() {
  // FetchUserData 호출로 데이터 가져오기
  const userData = FetchSampleUserData();
  // 데이터가 업데이트되면 상태 업데이트

  // ref, useRef
  return (
    <div>
      {userData ? (
        <div className={styles.profile}>
          <div>
            <Image
              src={"/profileImg.png"}
              alt="프로필이미지"
              width={28}
              height={28}
            />
          </div>
          <div>{userData.email}</div>
        </div>
      ) : (
        <button type="button" className={styles.button_login}>
          로그인
        </button>
      )}
    </div>
  );
}

export default Profile;

// Image - width, height
