import Image from "next/image";
import styles from "./style.module.css";

interface UserProfileProps {
  userEmail: string;
  userImage: string;
}

function UserProfile({ userEmail, userImage }: UserProfileProps) {
  return (
    <div className={styles["header-user"]}>
      <i className={styles["profile-icon"]}>
        <Image src={userImage} width={28} height={28} alt="프로필 이미지" />
      </i>
      <span className={styles["mobile-blind"]}>{userEmail}</span>
    </div>
  );
}

export default UserProfile;
