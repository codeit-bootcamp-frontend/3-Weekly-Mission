import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "@/lib/api";
import EmailInput from "@/components/formInput/emailInput/EmailInput";
import PasswordInput from "@/components/formInput/passwordInput/PasswordInput";
import styles from "./SigninForm.module.scss";
import Button from "@/components/button/Button";

type SigninInputs = {
  email: string;
  password: string;
};

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm<SigninInputs>({ mode: "onChange" });
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);

  const router = useRouter();

  if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
    router.push("/folder");
  }

  const toggleEncryptPassword = () => {
    setEyeOpen(!eyeOpen);
  };

  const handleClick = async () => {
    const { email, password } = getValues();

    const isValid = () => {
      if (email.length == 0 || password.length == 0) {
        alert("빈 칸이 있으면 안돼용");
        return false;
      }
      return Object.keys(errors).length === 0;
    };

    if (isValid()) {
      try {
        const { accessToken } = await login({ email, password });
        localStorage.setItem("accessToken", accessToken);
        router.push("/folder");
      } catch (error) {
        setError("email", { message: "이메일을 확인해 주세요." });
        setError("password", { message: "비밀번호를 확인해 주세요." });
      }
    }
  };

  return (
    <form className={styles.signinForm} onSubmit={handleSubmit(handleClick)}>
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
          placeHolder="비밀번호를 입력해 주세요."
        />
        {errors.password && (
          <span className={styles.errorMsg}>{errors.password.message}</span>
        )}
      </div>

      <Button
        type="submit"
        className={styles.signinButton}
        onClick={handleClick}
      >
        로그인
      </Button>
    </form>
  );
}
