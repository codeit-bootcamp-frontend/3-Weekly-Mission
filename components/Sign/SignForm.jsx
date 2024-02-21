import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import {useContext, useState} from "react";
import {signIn, signUp} from "@/utils/api";
import {ERRORS} from "@/constants/errors";
import {UserContext} from "@/contexts/UserProvider";
import {useRouter} from "next/router";

export default function SignForm({format}) {

  // state for email input
  const [email, setEmail] = useState('');
  const [emailErrors, setEmailErrors] = useState(null);

  // state for password input
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordErrors, setPasswordErrors] = useState(null);
  const [passwordConfirmErrors, setPasswordConfirmErrors] = useState(null);

  const router = useRouter();
  const {
    setIsLogin,
    setUserName,
    setUserMail
  } = useContext(UserContext);

  const validateForm = () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요');
      return false;
    }
    if (emailErrors) {
      alert('이메일을 확인해주세요');
      return false;
    }
    if (passwordErrors) {
      alert('비밀번호를 확인해주세요');
      return false;
    }
    if (format === 'signup') {
      if (!passwordConfirmation) {
        alert('비밀번호 확인란을 입력해주세요');
        return false;
      }
      if (passwordConfirmErrors) {
        alert('비밀번호 확인란을 확인해주세요');
        return false;
      }
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validate Form
    if (!validateForm()) {
      return;
    }
    // try Sign In
    if (format === 'signin') {
      const result = await signIn(email, password);
      if (result) {
        setUserName(email);
        setUserMail(email);
        setIsLogin(true);
        alert('로그인 성공');
        router('/folder');
      } else {
        alert(ERRORS.SIGN_IN_FAILED);
      }
      return;
    }

    // try Sign Up
    const result = await signUp(email, password);
    if (result) {
      setUserName(email);
      setUserMail(email);
      setIsLogin(true);
      alert('회원가입 성공');
      router('/signin');
    } else {
      alert(ERRORS.SIGN_UP_FAILED);
    }
  }

  return (
      <form className="login-form" onSubmit={handleSubmit} method="GET">
        <div className="input-box-container">
          <EmailInput format={format}
                      email={email}
                      setEmail={setEmail}
                      emailErrors={emailErrors}
                      setEmailErrors={setEmailErrors}/>
          <PasswordInput format={format}
                         password={password}
                         setPassword={setPassword}
                         passwordErrors={passwordErrors}
                         setPasswordErrors={setPasswordErrors}
                         passwordConfirmation={passwordConfirmation}
                         setPasswordConfirmation={setPasswordConfirmation}
                         passwordConfirmErrors={passwordConfirmErrors}
                         setPasswordConfirmErrors={setPasswordConfirmErrors}
          />
        </div>
        {format === 'signin' ? <button type='submit'>로그인</button> :
            <button type='submit'>회원가입</button>}
      </form>

  )

}
