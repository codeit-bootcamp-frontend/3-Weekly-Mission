import React, { useState } from "react";
import styled from "styled-components";
import { VoidFunc } from "@/types/functionType";
import imageData from "@/public/imageData";
import Image from "next/image";

interface Props {
  placeholder?: string;
  type: string;
  handler?: (value: string) => string;
  errorMassage?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignInput({
  type,
  handler,
  placeholder = "내용입력",
  value,
  setValue,
}: Props) {
  const eyeOn = { src: imageData.eyeOn.src, alt: "비밀번호 보이는 아이콘" };
  const eyeOff = { src: imageData.eyeOff.src, alt: "비밀번호 안보이는 아이콘" };
  const [eye, setEye] = useState(eyeOff);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMassage, setErrorMessage] = useState("");

  const toggleEyeImg = () => {
    if (eye.alt === eyeOn.alt) {
      setEye(eyeOff);
      setShowPassword(false);
      return;
    }
    setShowPassword(true);
    setEye(eyeOn);
  };
  const checkFocusOut = () => {
    if (!handler) return;
    const massage = handler(value);
    setErrorMessage(massage);
  };

  return (
    <Wrapper>
      <Container>
        <Input
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
  top: 18px;
  outline: none;
  border: none;
  background-color: #000;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 350px;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
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
