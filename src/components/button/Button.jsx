import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ className, children }) {
  return <div className={classNames(styles.button, className)}>{children}</div>;
}

export default Button;
