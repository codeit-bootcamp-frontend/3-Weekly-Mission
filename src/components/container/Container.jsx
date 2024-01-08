import classNames from "classnames";
import styles from "./Container.module.css";

function Container({ children, className }) {
  return (
    <div className={classNames(className, styles.container)}>{children}</div>
  );
}

export default Container;
