import { useForm, FieldError } from "react-hook-form";
import { useState } from "react";
import { email_reg } from "@/src/utils/regexPatterns";
import { eyeoff_svg, eyeon_svg } from "@/public/image/index";
import styles from "./signin.module.css";
import Styles from "@/styles/signin.module.css";
import Image from "next/image";
import LogoText from "@/components/atomicComponents/logoText/index";
import LoginInput from "@/components/atomicComponents/loginInput/index";
import LoginButton from "@/components/atomicComponents/loginButton/index";
import SnsLogin from "@/components/atomicComponents/snsLogin/index";
import useSignIn from "@/hook/useSignIn";

const SigninModule = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const  getSignIn  = useSignIn(setError);
  
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  const toggleisPasswordVisible = () => {
    setisPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={Styles.signin_Module_wrapper}>
      <LogoText text="회원이 아니신가요?" linkText="회원 가입하기" />
      <form noValidate onSubmit={handleSubmit(getSignIn)}>
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
          type={isPasswordVisible ? "text" : "password"}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          register={register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          suffix={
            <Image
              className={styles.eye_icon}
              src={isPasswordVisible ? eyeon_svg : eyeoff_svg}
              alt="eye"
              onClick={toggleisPasswordVisible}
              width={16}
              height={16}
            />
          }
        />
        <div className={styles.error_text_wrapper}>
          {errors.password && (
            <small className={styles.error_text}>
              {(errors.password as FieldError).message}
            </small>
          )}
        </div>

        <LoginButton children="로그인" />
      </form>
      <SnsLogin children="소셜 로그인" />
    </div>
  );
};

export default SigninModule;