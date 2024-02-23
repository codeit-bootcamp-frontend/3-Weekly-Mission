import styles from "@/styles/signin.module.css";
import SigninModule from "@/components/moduleComponents/signIn/index";

const Singin = () => {
  return (
    <div className={styles.signin_back_color}>
      <SigninModule />
    </div>
  );
};

export default Singin;

