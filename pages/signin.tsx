import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { postSignin } from "@/lib/api";
import { FormInput } from "@/lib/types";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";
import SocialLogin from "@/components/SocialLogin";
import styles from "@/styles/signin.module.css";

const Signin = () => {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({ mode: "onBlur" });

  const onSubmit = async (data: FormInput) => {
    const { email, password } = data;
    try {
      const result = await postSignin(email, password);
      const accessToken = result.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      accessToken && router.push("/folder");
    } catch {
      setIsSubmit(true);
      alert("알수없는 오류가 발생했습니다");
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
          <span className={styles.content}>회원이 아니신가요?</span>
          <Link href="/signup" className={styles["sign-link"]}>
            회원 가입하기
          </Link>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["AuthInput-box"]}>
          <AuthInput type="email" register={register} errors={errors} isSubmit={isSubmit} />
          <AuthInput type="password" register={register} errors={errors} isSubmit={isSubmit} />
        </div>

        <AuthButton>로그인</AuthButton>
        <SocialLogin>소셜 로그인</SocialLogin>
      </form>
    </article>
  );
};

export default Signin;
