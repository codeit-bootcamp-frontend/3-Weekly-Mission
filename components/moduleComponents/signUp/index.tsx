import React from "react";
import LogoText from "@/components/atomicComponents/logoText";
import LoginInput from "@/components/atomicComponents/loginInput";
import LoginButton from "@/components/atomicComponents/loginButton";
import SnsLogin from "@/components/atomicComponents/snsLogin";
import { useForm } from "react-hook-form";
import { FieldError } from "react-hook-form";
import { email_reg, password_reg } from "@/src/utils/regexPatterns";
import styles from "./signup.module.css";

const SingUpModule = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitted, errors },
  } = useForm({ mode: "onBlur" });

  return (
    <div>
      <LogoText text="이미 회원이신가요?" linkText="로그인 하기" />
      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <LoginInput
          id="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          register={register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: email_reg,
              message: "올바른 이메일 주소가 아닙니다.",
            },
          })}
        />
        <div className={styles.error_text_wrapper}>
          {errors.email && (
            <small className={styles.error_text}>
              {(errors.email as FieldError).message}
            </small>
          )}
        </div>
        <LoginInput
          id="password"
          type="password"
          label="비밀번호"
          placeholder="영문, 숫자를 조합해서 8자 이상 입력해주세요"
          register={register("password", {
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: password_reg,
              message: "영문, 숫자를 조합해서 8자 이상 입력해주세요",
            },
          })}
        />
        <div className={styles.error_text_wrapper}>
          {errors.password && (
            <small className={styles.error_text}>
              {(errors.password as FieldError).message}
            </small>
          )}
        </div>
        <LoginInput
          id="passwordconfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호와 일치하는 값을 입력해주세요"
          register={register("passwordconfirm", {
            required: "비밀번호를 입력해주세요",
            validate: (value) =>
              value === watch("password")
                ? true
                : "비밀번호가 일치하지 않습니다.",
          })}
        />
        <div className={styles.error_text_wrapper}>
          {errors.passwordconfirm && (
            <small className={styles.error_text}>
              {(errors.passwordconfirm as FieldError).message}
            </small>
          )}
        </div>
        <LoginButton children={"회원가입"} />
      </form>
      <SnsLogin children={"다른 방식으로 가입하기"} />
    </div>
  );
};

export default SingUpModule;

//watch는 입력된 필드의 값을 가져오는 메서드,
//watch("password") -> password의 값을 가져옴
//value === watch("password") ? true : "비밀번호가 일치하지 않습니다.",
//-> 비밀번호가 같으면 true, 다르면 "비밀번호가 일치하지 않습니다."를 반환
