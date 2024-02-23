import { ChangeEvent, useState } from "react";
import * as S from "./Input.style";

type inputType = "text" | "password";
type eyeIcon = "/assets/Icons/eye-off.svg" | "/assets/Icons/eye-on.svg";

export default function Input({
  id = "",
  label = "",
  type = "text",
  onChange,
  placeholder = "",
  value,
  ExistError = false,
  errorMessage = "",
}: {
  id: string;
  label: string;
  type: inputType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
  ExistError: boolean;
  errorMessage?: string;
}) {
  const defaultType = type;
  const [inputType, setInputType] = useState(type);
  const [eyeIcon, setEyeIcon] = useState<eyeIcon>("/assets/Icons/eye-off.svg");

  const handleChange = () => {
    if (inputType === "password") {
      setInputType("text");
      setEyeIcon("/assets/Icons/eye-on.svg");
    } else {
      setInputType("password");
      setEyeIcon("/assets/Icons/eye-off.svg");
    }
  };

  return (
    <S.MainDiv>
      <S.Label htmlFor={id}>
        {label}
        <S.Input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-status={ExistError ? "Error" : "Ok"}
          onBlur={onChange}
        />
      </S.Label>
      {ExistError && <S.Error>{errorMessage}</S.Error>}
      {defaultType === "password" && (
        <S.Image
          src={eyeIcon}
          alt="비밀번호 눈 아이콘 이미지"
          onClick={handleChange}
        />
      )}
    </S.MainDiv>
  );
}
