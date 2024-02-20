import React from "react";
import LogoText from "@/components/atomicComponents/logoText";
import LoginInput from "@/components/atomicComponents/loginInput";
import LoginButton from "@/components/atomicComponents/loginButton";
import SnsLogin from "@/components/atomicComponents/snsLogin";
const SingUpModule = () => {
  return (
    <div>
      <LogoText text={"이미 회원이신가요?"} linkText={"로그인 하기"} />
      <LoginInput placeholder={"이메일을 입력해주세요"} Children={"이메일"} />
      <LoginInput
        placeholder={"영문, 숫자를 조합해서 8자 이상 입력해주세요"}
        Children={"비밀번호"}
      />
      <LoginInput
        placeholder={"비밀번호와 일치하는 값을 입력해주세요"}
        Children={"비밀번호 확인"}
      />
      <LoginButton children={"회원가입"} />
      <SnsLogin children={"다른 방식으로 가입하기"}/>
    </div>
  );
};

export default SingUpModule;
