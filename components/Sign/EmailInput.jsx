import {useState} from "react";
import {checkEmailRedundancy} from "../../utils/api";
import {REGEX} from "../../constants/regex";
import {ERRORS} from "../../constants/errors";

export default function EmailInput({
  format,
  setEmailErrors,
  emailErrors,
  email,
  setEmail
}) {

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const onBlur = async (e) => {
    setEmailErrors(null);
    const email = e.target.value;
    //check Blank
    if (email === '') {
      setEmailErrors(ERRORS.EMAIL.VOID);
      return;
    }
    //check Email format
    if (!validateEmail(email)) {
      setEmailErrors(ERRORS.EMAIL.INVALID);
      return;
    }
    //check Redundancy
    if (format === 'signup') {
      const result = await checkRedundancy(email);
      if (result === 409) {
        setEmailErrors(ERRORS.EMAIL.DUPLICATED);
      }
    }
  }

  const checkRedundancy = async (email) => {
    try {
      return await checkEmailRedundancy(email);
    } catch (e) {
      setEmailErrors(ERRORS.SIGN_UP_FAILED);
    }
  }

  const validateEmail = (email) => {
    return REGEX.EMAIL.test(email);
  }

  return (
      <div className="input-box">
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" value={email}
               onChange={handleChange}
               onBlur={onBlur}/>
        {emailErrors && <p className="alert">{emailErrors}</p>}
      </div>
  )
}
