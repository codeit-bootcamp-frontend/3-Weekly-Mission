import { useState } from "react";
import LogoText from "@/components/atomicComponents/logoText/index";
import LoginInput from "@/components/atomicComponents/loginInput/index";
import LoginButton from "@/components/atomicComponents/loginButton/index";
import SnsLogin from "@/components/atomicComponents/snsLogin/index";
import Styles from "@/styles/signin.module.css";

const SigninModule = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ email: "", password: "" });

    if (email === "") {
      setError({ ...error, email: "이메일을 입력해주세요" });
      return;
    }
    if (password === "") {
      setError({ ...error, password: "비밀번호를 입력해주세요" });
      return;
    }
  };

  return (
    <div className={Styles.signin_Module_wrapper}>
      <LogoText text={"회원이 아니신가요?"} linkText={"회원 가입하기"} />
      <form onSubmit={handleSubmit}>
        <LoginInput
          id={"email"}
          placeholder={"이메일을 입력해주세요"}
          label={"이메일"}
          inputType={"text"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          id={"password"}
          placeholder={"비밀번호를 입력해주세요"}
          label={"비밀번호"}
          inputType={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton children={"로그인"} />
      </form>
      <SnsLogin children={"소셜 로그인"} />
    </div>
  );
};

export default SigninModule;





// import { useState } from "react";
// import LogoText from "@/components/atomicComponents/logoText/index";
// import LoginInput from "@/components/atomicComponents/loginInput/index";
// import LoginButton from "@/components/atomicComponents/loginButton/index";
// import SnsLogin from "@/components/atomicComponents/snsLogin/index";
// import Styles from "@/styles/signin.module.css";

// const SigninModule = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState({ email: "", password: "" });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError({ email: "", password: "" });

//     if (email === "") {
//       setError({ ...error, email: "이메일을 입력해주세요" });
//       return;
//     }
//     if (password === "") {
//       setError({ ...error, password: "비밀번호를 입력해주세요" });
//       return;
//     }
//   };

//   return (
//     <div className={Styles.signin_Module_wrapper}>
//       <LogoText text={"회원이 아니신가요?"} linkText={"회원 가입하기"} />
//       <form onSubmit={handleSubmit}>
//         <LoginInput
//           placeholder={"이메일을 입력해주세요"}
//           Children={"이메일"}
//           inputType={"text"}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <LoginInput
//           placeholder={"비밀번호를 입력해주세요"}
//           Children={"비밀번호"}
//           inputType={"password"}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <LoginButton children={"로그인"} />
//       </form>
//       <SnsLogin children={"소셜 로그인"} />
//     </div>
//   );
// };

// export default SigninModule;


// import { useState, useRef } from "react";
// import LogoText from "@/components/atomicComponents/logoText/index";
// import LoginInput from "@/components/atomicComponents/loginInput/index";
// import LoginButton from "@/components/atomicComponents/loginButton/index";
// import SnsLogin from "@/components/atomicComponents/snsLogin/index";
// import Styles from "@/styles/signin.module.css";
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import  yupResolver  from '@hookform/resolvers';
// import * as yup from 'yup';


// type FormType = {
//   email: string;
//   userId: string;
//   password: string;
  
// };

// const validationSchema = yup.object({
//   email: yup.string().required('Required').email(),
//   userId: yup.string().required('Required').max(50, 'Too Long').min(3, 'Too Short'),
//   password: yup.string().required('Required').max(50, 'Too Long').min(10, 'Too Short'),
// });

// const SigninModule = () => {
//   const{register, handleSubmit, errors} = useForm<FormType>({
//     mode: 'onBlur',
//     resolver: yupResolver(validationSchema)
//   });


//   const onSubmit = (data: FormType) => {
//     console.log(data);
//   }

//   return (
//     <div className={Styles.signin_Module_wrapper}>
//       <LogoText text={"회원이 아니신가요?"} linkText={"회원 가입하기"} />
//       <form onSubmit={handleSubmit(onSubmit)} className="login-form">
//       <div className="input email">
//         <LoginInput id="email" label="Email" name="email" type="text" ref={register} error={errors.email} />
//       </div>
//       <div className="input user-id">
//         <LoginInput id="user-id" label="User ID" name="userId" type="text" ref={register} error={errors.userId} />
//       </div>
//       <div className="input password">
//         <LoginInput
//           id="password"
//           label="Password"
//           name="password"
//           type="password"
//           ref={register}
//           error={errors.password}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//       <SnsLogin children={"소셜 로그인"} />
//     </div>
//   );
// };

// export default SigninModule;


