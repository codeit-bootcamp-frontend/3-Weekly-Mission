import styles from "@/styles/signup.module.css";
import SingUpModule from "@/components/moduleComponents/signUp/index";

const Signup = () => {
  return (
    <div className={styles.signup_back_color}>
      <SingUpModule />
    </div>
  )
}

export default Signup