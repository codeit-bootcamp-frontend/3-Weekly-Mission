import useGetFolderAsync from "../hooks/useGetFolderAsync";
import styles from "./Banner.module.css";

export default function Banner() {
  const data = useGetFolderAsync();
  
  return (
    <section className={styles["banner"]}>
      <div className={styles["banner-wrapper"]}>
        <img
          className={styles["banner-img"]}
          src={data?.owner?.profileImageSource}
          alt="banner-img"
        ></img>
        <span className={styles["banner-user-name"]}>@{data?.owner?.name}</span>
      </div>
      <div className={styles["banner-title"]}>{data?.name}</div>
    </section>
  );
}
