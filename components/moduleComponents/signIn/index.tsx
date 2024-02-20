import React from "react";
import LogoText from "@/components/atomicComponents/logoText/index";
import LoginInput from "@/components/atomicComponents/loginInput/index";
import LoginButton from "@/components/atomicComponents/loginButton/index";
import SnsLogin from "@/components/atomicComponents/snsLogin/index";
import Styles from "@/styles/signin.module.css";

const SigninModule = () => {
  const click = () =>{
    alert("로그인 버튼 클릭");
  }
  return (
    <div className={Styles.signin_Module_wrapper}>
      <LogoText text="회원이 아니신가요?" linkText="회원 가입하기" />
      <LoginInput placeholder={"이메일을 입력해주세요"} Children={"이메일"} />
      <LoginInput
        placeholder={"비밀번호를 입력해주세요"}
        Children={"비밀번호"}
      />
      <LoginButton children={"로그인"} onClick={click} />
      <SnsLogin />
    </div>
  );
};

export default SigninModule;
