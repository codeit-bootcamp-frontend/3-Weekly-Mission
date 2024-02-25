import Image from "next/image";
import styles from "./Banner.module.css";
import { SampleFolder } from "@/pages/shared";

export default function Banner({ folder }: { folder: SampleFolder }) {
  return (
    <section className={styles["banner"]}>
      <div className={styles["banner-wrapper"]}>
        <div className={styles["banner-img"]}>
          <Image
            fill
            src={folder?.owner?.profileImageSource}
            alt="banner-img"
          />
        </div>
        <span className={styles["banner-user-name"]}>
          @{folder?.owner?.name}
        </span>
      </div>
      <div className={styles["banner-title"]}>{folder?.name}</div>
    </section>
  );
}
