import SignUpForm from "@/components/SignUpForm/SignUpForm";
import Input from "@/components/Input/Input";
import styles from "./signin.module.css";

export default function Signup() {
  return (
    <div className={styles.wrapper}>
      <SignUpForm>
        <Input isSignUp />
      </SignUpForm>
    </div>
  );
}
