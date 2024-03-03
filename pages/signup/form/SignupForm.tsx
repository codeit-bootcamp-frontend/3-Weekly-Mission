import { useForm } from "react-hook-form";
import { useState } from "react";
import { checkEmail, createUser } from "@/lib/api";
import { useRouter } from "next/router";
import EmailInput from "@/components/formInput/emailInput/EmailInput";
import PasswordInput from "@/components/formInput/passwordInput/PasswordInput";
import styles from "./SignupForm.module.scss";
import Button from "@/components/button/Button";

type SignupInputs = {
  email: string;
  password: string;
  passwordCheck: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm<SignupInputs>({ mode: "onChange" });
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);

  const router = useRouter();

  if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
    router.push("/folder");
  }

  const toggleEncryptPassword = () => {
    setEyeOpen(!eyeOpen);
  };

  const handleClick = async () => {
    const { email, password, passwordCheck } = getValues();

    const isValid = () => {
      if (
        email.length == 0 ||
        password.length == 0 ||
        passwordCheck.length == 0
      ) {
        alert("빈 칸이 있으면 안돼용");
        return false;
      }
      if (password !== passwordCheck) {
        setError("passwordCheck", { message: "비밀번호가 일치하지 않아요." });
        return false;
      }
      return Object.keys(errors).length === 0 && password === passwordCheck;
    };

    if (isValid()) {
      try {
        await checkEmail(email);
        const { accessToken } = await createUser({
          email,
          password,
        });
        localStorage.setItem("accessToken", accessToken);
        router.push("/folder");
      } catch (error) {
        setError("email", { message: "이미 존재하는 이메일입니다." });
      }
    }
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit(handleClick)}>
      <div className={styles.container}>
        <div className={styles.inputLabel}>이메일</div>
        <EmailInput
          hasError={errors.email}
          name="email"
          register={register}
          placeHolder="이메일을 입력해 주세요."
        />
        {errors.email && (
          <span className={styles.errorMsg}>{errors.email.message}</span>
        )}
      </div>
      <div className={styles.container}>
        <div className={styles.inputLabel}>비밀번호</div>
        <PasswordInput
          hasError={errors.password}
          name="password"
          register={register}
          eyeOpen={eyeOpen}
          onClick={toggleEncryptPassword}
          placeHolder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
        />
        {errors.password && (
          <span className={styles.errorMsg}>{errors.password.message}</span>
        )}
      </div>
      <div className={styles.container}>
        <div className={styles.inputLabel}>비밀번호 확인</div>
        <PasswordInput
          hasError={errors.passwordCheck}
          name="passwordCheck"
          register={register}
          eyeOpen={eyeOpen}
          onClick={toggleEncryptPassword}
          placeHolder="비밀번호와 일치하는 값을 입력해 주세요."
        />
        {errors.passwordCheck && (
          <span className={styles.errorMsg}>
            {errors.passwordCheck.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        className={styles.signupButton}
        onClick={handleClick}
      >
        회원가입
      </Button>
    </form>
  );
}
