import styles from "@/components/sharing/ui-cta/Cta.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Cta = ({ children }) => {
  return <div className={cx("container")}>{children}</div>;
};
