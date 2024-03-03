import Image from "next/image";
import styles from "./Banner.module.css";
import classNames from "classnames/bind";
import type{ FolderData, UserData } from "@/pages/shared/[folderid]";

const cx = classNames.bind(styles);

export default function Banner({ folder, user }: { folder: FolderData, user: UserData }) {
  return (
    <section className={cx("banner")}>
      <div className={cx("banner-wrapper")}>
        <div className={cx("banner-img")}>
          <Image
            fill
            src={user?.image_source}
            alt="banner-img"
          />
        </div>
        <span className={cx("banner-user-name")}>
          @{user?.name}
        </span>
      </div>
      <div className={cx("banner-title")}>{folder?.name}</div>
    </section>
  );
}
