import Profile from "./Profile";
import styles from "./Navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <div
      className={`{styles.nav_bar} ${
        styles.fixed_navbar ? styles.fixed_navbar : ""
      }`}
    >
      <div className={styles["logo"]}>
        <Image
          src={"/Linkbrary.png"}
          alt="Linkbrary 로고"
          width={133}
          height={24}
        />
      </div>
      <div className={styles.profile}>
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
