import SignInForm from "@/components/SignForm/SignForm";
import Input from "@/components/Input/Input";
import styles from "./sign.module.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignInData } from "@/@types/api/interface";
import router from "next/router";
import {
  emailValidator,
  signInPasswordValidator,
} from "@/utils/registerOptions";
import { EMAIL, PASSWORD } from "@/constants/sign";
import { BASE_URL } from "@/constants/constant";
import Button from "@/components/Button/Button";
import SocialSignBox from "@/components/SocialSignBox/SocialSignBox";
import { useEffect } from "react";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FieldValues> = async (data: SignInData) => {
    const response = await fetch(`${BASE_URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();

      localStorage.setItem("accessToken", responseData.data.accessToken);
      router.push("/folder");
    } else {
      setError("email", {
        type: "manual",
        message: "이메일을 확인해 주세요.",
      });
      setError("password", {
        type: "manual",
        message: "비밀번호를 확인해 주세요.",
      });
    }
  };

  // 임시 주석
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     router.push("/folder");
  //   }
  // }, []);

  return (
    <div className={styles.wrapper}>
      <SignInForm
        linkDescription="회원이 아니신가요?"
        linkText="회원가입 하기"
        href="signup"
      >
        <form
          className={styles.form}
          id="signin-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type={EMAIL}
            placeholder="이메일을 입력해 주세요."
            labelName="이메일"
            register={register}
            registerName={EMAIL}
            validator={emailValidator}
            errorMessage={errors.email?.message?.toString() || ""}
          />
          <Input
            type={PASSWORD}
            placeholder="비밀번호를 입력해 주세요."
            labelName="비밀번호"
            register={register}
            registerName={PASSWORD}
            validator={signInPasswordValidator}
            errorMessage={errors.password?.message?.toString() || ""}
          />
          <Button id="signin-btn" text="로그인" />
        </form>
        <SocialSignBox text="소셜 로그인" />
      </SignInForm>
    </div>
  );
}

export default Signin;
