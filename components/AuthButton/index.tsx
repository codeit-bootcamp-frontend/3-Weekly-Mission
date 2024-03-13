import styles from "./AuthButton.module.css";

const AuthButton = ({ children = "로그인" }: { children: string }) => {
  return (
    <button className={styles.button} type="submit">
      {children}
    </button>
  );
};

export default AuthButton;
