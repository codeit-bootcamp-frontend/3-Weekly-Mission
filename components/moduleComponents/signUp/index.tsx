import React, { use, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FieldError } from "react-hook-form";
import { useState } from "react";
import axios from "@/libs/axios";
import Image from "next/image";
import LogoText from "@/components/atomicComponents/logoText";
import LoginInput from "@/components/atomicComponents/loginInput";
import LoginButton from "@/components/atomicComponents/loginButton";
import SnsLogin from "@/components/atomicComponents/snsLogin";
import { email_reg, password_reg } from "@/src/utils/regexPatterns";
import { eyeoff_svg, eyeon_svg } from "@/public/image/index";
import styles from "./signup.module.css";
import { useRouter } from "next/router";

const SingUpModule = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setisPasswordConfirmVisible] =
    useState(false);
  const router = useRouter();

  const toggleisPasswordVisible = () => {
    setisPasswordVisible(!isPasswordVisible);
  };

  const toggleisPasswordConfirmVisible = () => {
    setisPasswordConfirmVisible(!isPasswordConfirmVisible);
  };

  const isEmailDuplicate = async (email: string) => {
    try {
      const res = await axios.post("check-email", {
        email: email,
      });
    } catch (e: any) {
      if (e.response.status === 409) {
        setError("email", {
          type: "manual",
          message: "이미 사용 중인 이메일입니다.",
        });
      }
    }
  };

  const getSignUp = async (data: any) => {
    try {
      const res = await axios.post("/sign-up", data);
      localStorage.setItem("accessToken", res.data.accessToken);
      router.push("/folder");
    } catch (e: any) {
      if (e.response.status === 400) {
        setError("email", {
          type: "manual",
          message: "이메일을 확인해주세요",
        });
        setError("password", {
          type: "manual",
          message: "비밀번호를 확인해주세요",
        });
      }
    }
  };

  useEffect(() => {
    if(localStorage.getItem("accessToken")){ 
      router.push("/folder");
    }
  },[])

  return (
    <div>
      <LogoText text="이미 회원이신가요?" linkText="로그인 하기" />
      <form noValidate onSubmit={handleSubmit(getSignUp)}>
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
            onBlur: (e) => isEmailDuplicate(e.target.value),
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
          placeholder="영문, 숫자를 조합해서 8자 이상 입력해주세요"
          register={register("password", {
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: password_reg,
              message: "영문, 숫자를 조합해서 8자 이상 입력해주세요",
            },
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
        <LoginInput
          id="passwordconfirm"
          type={isPasswordConfirmVisible ? "text" : "password"}
          label="비밀번호 확인"
          placeholder="비밀번호와 일치하는 값을 입력해주세요"
          register={register("passwordconfirm", {
            required: "비밀번호를 입력해주세요",
            validate: (value) =>
              value === watch("password")
                ? true
                : "비밀번호가 일치하지 않습니다.",
          })}
          suffix={
            <Image
              className={styles.eye_icon}
              src={isPasswordConfirmVisible ? eyeon_svg : eyeoff_svg}
              alt="eye"
              onClick={toggleisPasswordConfirmVisible}
              width={16}
              height={16}
            />
          }
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

//똑같은 느김의 state 2개로 하기 싫d으니까  id에 키값을 줘서 하나로 처리하기?

//오류를 수동으로 정할 때 setError를 사용한다.

// React.useEffect(() => {
//   setError("username", {
//     type: "manual",
//     message: "Dont Forget Your Username Should Be Cool!",
//   })
// }, [setError])
//보통은 에러를 자동으로 처리하지만, 수동으로 처리할 때는 setError를 사용한다.
