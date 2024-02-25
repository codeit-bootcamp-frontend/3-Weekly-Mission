import SignUpForm from "@/components/SignForm/SignForm";
import Input from "@/components/Input/Input";
import styles from "./sign.module.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { SignUpData } from "@/@types/api/interface";
import router from "next/router";
import { EMAIL, PASSWORD, REPASSWORD } from "@/constants/sign";
import {
  emailValidator,
  signUpPasswordValidator,
} from "@/utils/registerOptions";
import { useEffect } from "react";
import Button from "@/components/Button/Button";
import SocialSignBox from "@/components/SocialSignBox/SocialSignBox";
import { BASE_URL } from "@/constants/constant";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm({ mode: "onChange" });

  const checkEmail = async (email: string) => {
    const body = JSON.stringify({ email });
    let msg;

    const response = await fetch(`${BASE_URL}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    const responseData = await response.json();
    if (response.status === 409) {
      // 이메일 중복
      msg = responseData.error.message;
    } else if (response.status === 400) {
      // 형식 오류
      msg = email ? responseData.error.message : "이메일을 입력해 주세요.";
    }

    setError(EMAIL, {
      type: "email-error",
      message: msg,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data: SignUpData) => {
    const { password, repassword } = data;

    if (password !== repassword) {
      setError(REPASSWORD, {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않아요.",
      });
      return;
    }
    const response = await fetch(`${BASE_URL}/sign-up`, {
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
    }
  };

  useEffect(() => {
    if (watch(PASSWORD) !== watch(REPASSWORD) && watch(REPASSWORD)) {
      setError(REPASSWORD, {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않아요.",
      });
    } else {
      // 비밀번호 일치시 오류 제거
      clearErrors(REPASSWORD);
    }
  }, [watch(PASSWORD), watch(REPASSWORD)]);

  //  accessToken이 있는 경우 “/folder” 페이지로 이동합니다.
  // 기능 확인 위해 임시로 막아둠
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     router.push("/folder");
  //   }
  // }, []);

  return (
    <div className={styles.wrapper}>
      <SignUpForm
        linkDescription="이미 회원이신가요?"
        linkText="로그인 하기"
        href="signin"
      >
        <form
          className={styles.form}
          id="signup-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type={EMAIL}
            placeholder="이메일을 입력해 주세요."
            labelName="이메일"
            register={register}
            registerName={EMAIL}
            validator={emailValidator}
            onBlur={checkEmail}
            errorMessage={errors.email?.message?.toString() || ""}
          />
          <Input
            type={PASSWORD}
            placeholder="비밀번호를 입력해 주세요."
            labelName="비밀번호"
            register={register}
            registerName={PASSWORD}
            validator={signUpPasswordValidator}
            errorMessage={errors.password?.message?.toString() || ""}
          />
          <Input
            type={PASSWORD}
            placeholder="비밀번호를 입력해 주세요."
            labelName="비밀번호 확인"
            register={register}
            registerName={REPASSWORD}
            validator={signUpPasswordValidator}
            errorMessage={errors.repassword?.message?.toString() || ""}
          />
          <Button id="signup-btn" text="회원가입" />
        </form>
        <SocialSignBox text="다른 방식으로 가입하기" />
      </SignUpForm>
    </div>
  );
}
