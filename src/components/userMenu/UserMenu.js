import styles from "./UserMenu.module.css";
function UserMenu({ userProfile }) {
  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton}>
        <img src={userProfile["image_source"]} alt="유저 메뉴" />
      </button>
      <div>{userProfile.email}</div>
    </div>
  );
}

export default UserMenu;
