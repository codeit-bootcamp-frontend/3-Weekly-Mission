import { AuthButtonProps } from "@/lib/types";
import styles from "./AuthButton.module.css";

const AuthButton = ({ children = "로그인" }: AuthButtonProps) => {
  return (
    <button className={styles.button} type="submit">
      {children}
    </button>
  );
};

export default AuthButton;
