import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { postSignup } from "@/lib/api";
import { FormInput } from "@/lib/types";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
import styles from "@/styles/signin.module.css";
import SocialLogin from "@/components/SocialLogin";

const SignUp = () => {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>({ mode: "onBlur" });

  const onSubmit = async (data: FormInput) => {
    const { email, password } = data;
    let result;
    try {
      result = await postSignup(email, password);
      const accessToken = result.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      result && router.push("/folder");
    } catch {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/folder");
    }
  }, [router]);

  return (
    <article className={styles["signin-page"]}>
      <header className={styles.header}>
        <Logo />
        <div className={styles["sub-header"]}>
          <span className={styles.content}>이미 회원이신가요?</span>
          <Link href="/signin" className={styles["sign-link"]}>
            로그인 하기
          </Link>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["AuthInput-box"]}>
          <AuthInput type="emailSignup" register={register} errors={errors} isSubmit={isSubmit} />
          <AuthInput type="passwordSignup" register={register} errors={errors} />
          <AuthInput type="passwordConfirm" register={register} watch={watch} errors={errors} />
        </div>

        <AuthButton>회원가입</AuthButton>
        <SocialLogin>다른 방식으로 가입하기</SocialLogin>
      </form>
    </article>
  );
};

export default SignUp;
