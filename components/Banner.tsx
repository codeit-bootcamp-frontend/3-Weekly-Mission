import Image from "next/image";
import styles from "./Banner.module.css";
import { SampleFolder } from "@/pages/shared";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Banner({ folder }: { folder: SampleFolder }) {
  return (
    <section className={cx("banner")}>
      <div className={cx("banner-wrapper")}>
        <div className={cx("banner-img")}>
          <Image
            fill
            src={folder?.owner?.profileImageSource}
            alt="banner-img"
          />
        </div>
        <span className={cx("banner-user-name")}>
          @{folder?.owner?.name}
        </span>
      </div>
      <div className={cx("banner-title")}>{folder?.name}</div>
    </section>
  );
}
