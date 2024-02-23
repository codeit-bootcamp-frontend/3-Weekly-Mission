import global from "@/styles/global.module.css";
import Image from "next/image";
import eyeOffIcon from "@/public/assets/images/icons/eye-off-icon.svg";
import eyeOnIcon from "@/public/assets/images/icons/eye-on-icon.svg";
import { useState } from "react";

interface InputProps {
  placeholder?: string;
  password?: boolean;
}

const Input = ({
  password = false,
  placeholder = "내용을 입력하세요",
}: InputProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEyeOff, setIsEyeOff] = useState(true);

  const handleClickEyeToggle = () => {
    setIsEyeOff((currentBoolean) => !currentBoolean);
  };

  return (
    <>
      <div
        className={`${global.inputBox} ${
          errorMessage && errorMessage.length > 0 ? global.red : ""
        }`}
      >
        {password ? (
          <>
            <input
              type={isEyeOff ? "password" : "text"}
              placeholder={placeholder}
              className={global.input}
            />
            <button
              type="button"
              className={global.eyeButton}
              onClick={handleClickEyeToggle}
            >
              {isEyeOff ? (
                <Image src={eyeOffIcon} alt="비밀번호 보려면 클릭" />
              ) : (
                <Image src={eyeOnIcon} alt="비밀번호 숨기려면 클릭" />
              )}
            </button>
          </>
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            className={global.input}
          />
        )}
      </div>
      {errorMessage && errorMessage.length > 0 ? (
        <p aria-live="assertive" className={global.inputErrorMessage}>
          {errorMessage}
        </p>
      ) : null}
    </>
  );
};

export default Input;
