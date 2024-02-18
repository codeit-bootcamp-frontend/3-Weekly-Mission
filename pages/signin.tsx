import SignInForm from "@/components/SignInForm/SignInForm";
import Input from "@/components/Input/Input";
import styles from "./signin.module.css";

function Signin() {
  return (
    <div className={styles.wrapper}>
      <SignInForm>
        <Input />
      </SignInForm>
    </div>
  );
}

export default Signin;
