import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { eyeOff, eyeOn } from "@/public/img";

interface Props {
  placeholder?: string;
  type: string;
  handler?: (value: string) => string;
  errorMassage?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  labelName: string;
}

export default function SignInput({
  type,
  handler,
  placeholder = "내용입력",
  value,
  setValue,
  labelName,
}: Props) {
  const EYE_ON = { src: eyeOn.src, alt: "비밀번호 보이는 아이콘" };
  const EYE_OFF = { src: eyeOff.src, alt: "비밀번호 안보이는 아이콘" };
  const [eye, setEye] = useState(EYE_ON);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMassage, setErrorMessage] = useState("");

  const toggleEyeImg = () => {
    if (eye.alt === EYE_ON.alt) {
      setEye(EYE_OFF);
      setShowPassword(false);
      return;
    }
    setShowPassword(true);
    setEye(EYE_ON);
  };
  const checkFocusOut = () => {
    if (!handler) return;
    const massage = handler(value);
    setErrorMessage(massage);
  };

  return (
    <Wrapper>
      <Container>
        <Label htmlFor={labelName}>{labelName}</Label>
        <Input
          id={labelName}
          onBlur={checkFocusOut}
          $error={errorMassage !== ""}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          autoComplete="on"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {type === "password" ? (
          <EyeButton type="button" onClick={toggleEyeImg}>
            <Image fill src={eye.src} alt={eye.alt} />
          </EyeButton>
        ) : null}
      </Container>
      <ErrorMessage>{errorMassage}</ErrorMessage>
    </Wrapper>
  );
}

const EyeButton = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 15px;
  top: 50px;
  outline: none;
  border: none;
  background-color: #000;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface InputProps {
  $error: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  border: 1px solid #ccd5e3;
  border-radius: 8px;
  outline: none;
  padding: 18px 15px;

  ${(props) =>
    props.$error ? `border: 1px solid var(--Linkbrary-red, #FF5B56);` : ``}

  &:focus {
    border: 1px solid #6d6afe;
  }
`;

const ErrorMessage = styled.span`
  color: var(--Linkbrary-red, #ff5b56);
  font-size: 1.4rem;
  font-weight: 400;
  text-align: left;
`;

const Label = styled.label`
  color: #000;
  font-size: 1.4rem;
  font-weight: 400;
`;
