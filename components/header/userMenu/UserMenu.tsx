import styles from "./UserMenu.module.scss";
import ImageButton from "@/components/button/imageButton/ImageButton";

export type UserProfile = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
};

function UserMenu({ userProfile }: { userProfile: UserProfile }) {
  const { image_source, email } = userProfile;

  const handleClick = () => {
    console.log("유저 프로필 클릭");
  };
  return (
    <div className={styles.userMenu}>
      <ImageButton
        className={styles.iconButton}
        src={image_source}
        width={28}
        height={28}
        onClick={handleClick}
        alt="유저 메뉴"
      />
      <div>{email}</div>
    </div>
  );
}

export default UserMenu;
