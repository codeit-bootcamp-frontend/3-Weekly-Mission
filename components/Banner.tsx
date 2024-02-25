import Image from "next/image";
import useGetFolder from "../hooks/useGetFolder";
import styles from "./Banner.module.css";

export default function Banner() {
  const data: any = useGetFolder();

  return (
    <section className={styles["banner"]}>
      <div className={styles["banner-wrapper"]}>
        <div className={styles["banner-img"]}>
          <Image fill src={data?.owner?.profileImageSource} alt="banner-img" />
        </div>
        <span className={styles["banner-user-name"]}>@{data?.owner?.name}</span>
      </div>
      <div className={styles["banner-title"]}>{data?.name}</div>
    </section>
  );
}
