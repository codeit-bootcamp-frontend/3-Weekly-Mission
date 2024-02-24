import { useForm, FieldError } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { email_reg } from "@/src/utils/regexPatterns";
import { eyeoff_svg, eyeon_svg } from "@/public/image/index";
import styles from "./signin.module.css";
import Styles from "@/styles/signin.module.css";
import Image from "next/image";
import LogoText from "@/components/atomicComponents/logoText/index";
import LoginInput from "@/components/atomicComponents/loginInput/index";
import LoginButton from "@/components/atomicComponents/loginButton/index";
import SnsLogin from "@/components/atomicComponents/snsLogin/index";
import axios from "@/libs/axios";

const SigninModule = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const router = useRouter();

  const toggleisPasswordVisible = () => {
    setisPasswordVisible(!isPasswordVisible);
  };

  const getSignIn = async (data: any) => {
    try {
      const res = await axios.post("/sign-in", data);
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
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  }, []);
  
  //data 랑 error의 타입은 무엇인가?
 // localStorage.setItem("accessToken", res.data.accessToken);
  // 로컬스토리지에 토큰을 저장할때 "accessToken" 이건 키고  res.data.accessToken는 value가 들어와야 하는데 undefined가 들어온다.

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

//register를 사용하여 input을 등록하고, handleSubmit을 사용하여 form을 제출하고, errors를 사용하여 오류를 표시한다.
//register는 각 입력란에 react-hook-form을 연결해준다.
//{...register("email")} -> input요소에 name으로 이름이 들어감

//handleSubmit은 form에서 onSubmit을 사용할 때 사용한다.
//데이터가 넘어오는 콜백함수를 인자로 받음

// 양식이 현재 어떤 상태인지를 담고있는 formState
//{isSubmitting} -> 제출중인지 아닌지를 나타내는 불리언 값
//{ -> 양식이 제출되었는지 아닌지를 나타내는 불리언 값

//{errors.email && <small>{errors.email.message}</small>}
//errors라는 객체에 email이라는 키가 있고, 그 값이 있다면, 그 값의 message를 출력해라

//리액트 컴포넌트는 props로 ref를 넘겨줄 수 없음
//React.forwardRef를 사용하여 ref를 넘겨줄 수 있음

// react-hook-form 의 register 함수에는 많은 속성? 옵션? 이 들어가있다.
// react-hook-form 에서 input의 값을 handleSubmit의 데이터 로 받으려면 ref속성이 필요한데
// input 컴포넌트를 분리해서 사용한 경우에는 input에 ref가 없어서 props로 사용해줘야한다.
// ...register 스프레드 문법으로 register를 props로 넘겨주고 사용
// -> 정상작동 라고 추측해보기?

//“/api/sign-in”으로 post요청을 보내는 함수
//post요청해서 성공 응답 받기 -> 성공하면 /folder페이지로 이동
//로그인을 실패하는 경우 이메일 && 비밀번호를 확인해주세요가 밑에 나오도록
//대부분의 경우에는 response.ok를 사용하여 응답이 성공했는지를 확인하는 것이 더 간단하고 효율적
//accessToken을 localStorage에 저장하고, 조회해서 /folder페이지로 이동
//   test@codeit.com sprint101
//현재 에러메세지가 안나옴

// React.useEffect(() => {
//   setError("username", {
//     type: "manual",  //manual은 사용자가 직접 에러를 설정할 때 사용
//     message: "Dont Forget Your Username Should Be Cool!",
//   })
// }, [setError])
//보통은 에러를 자동으로 처리하지만, 수동으로 처리할 때는 setError를 사용한다.
