import eyeOffIcon from "../../assets/icons/signin-eye-off.svg";
import eyeOnIcon from "../../assets/icons/signin-eye-on.svg";
import {useState} from "react";
import {ERRORS} from "@/constants/errors";
import {REGEX} from "@/constants/regex";

export default function PasswordInput({
  format,
  password,
  setPassword,
  setPasswordErrors,
  setPasswordConfirmation,
  setPasswordConfirmErrors,
  passwordErrors,
  passwordConfirmation,
  passwordConfirmErrors,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickEyes = () => {
    setShowPassword(!showPassword);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const onChangePasswordConformation = (e) => {
    setPasswordConfirmation(e.target.value);
  }

  const onBlurPassword = (e) => {
    setPasswordErrors(null);
    const password = e.target.value;
    //check Blank
    if (password === '') {
      setPasswordErrors(ERRORS.PASSWORD.VOID);
      return;
    }

    //check Password format
    if (password.length < 8 || password.length > 20) {
      setPasswordErrors(ERRORS.PASSWORD.LENGTH);
    }

    //check that password contains at least one number, one lowercase letter,  and one special character
    const re = REGEX.PASSWORD;
    if (!REGEX.PASSWORD.test(password)) {
      setPasswordErrors(ERRORS.PASSWORD.VALIDATION);
    }

  }

  const onBlurPasswordConformation = (e) => {
    setPasswordConfirmErrors(null);
    const passwordConformation = e.target.value;

    //check Password match
    if (password !== passwordConformation) {
      setPasswordConfirmErrors(ERRORS.PASSWORD.NOT_MATCH);
    }
  }

  return (
      <div className="input-box">

        <label htmlFor="password">비밀번호</label>

        <div className="password-box">
          <input id="password" type={showPassword ? "text" : "password"}
                 onChange={onChangePassword} onBlur={onBlurPassword}/>
          <img src={showPassword ? "/icons/signin-eye-on.svg"
              : "/icons/signin-eye-off.svg"} alt="eye-icon"
               onClick={handleClickEyes}/>
        </div>

        {passwordErrors && <p className="alert">{passwordErrors}</p>}

        {format === 'signup' &&
            <div className="input-box">
              <label htmlFor="password-conformation">비밀번호 확인</label>
              <div className="password-box">
                <input id="password-conformation"
                       value={passwordConfirmation}
                       type={showPassword ? "text" : "password"}
                       onChange={onChangePasswordConformation}
                       onBlur={onBlurPasswordConformation}
                />
                <img src={showPassword ? "/icons/signin-eye-on.svg"
                    : "/icons/signin-eye-off.svg"} alt="eye-icon"
                     onClick={handleClickEyes}/>
              </div>
              {passwordConfirmErrors && <p
                  className="alert">{passwordConfirmErrors}</p>}
            </div>
        }
      </div>
  );
}
