import SignInput from "@/components/SignInput/SignInput";
import React, { useState } from "react";
import styled from "styled-components";

export default function Test() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleError = (value: string) => {
    if (value === "") {
      return "내용을 입력해주세요";
    }
    if (value === "error") {
      return "에러";
    }
    return "";
  };
  return (
    <Wrapper>
      <form>
        <SignInput
          value={id}
          setValue={setId}
          type="email"
          placeholder="아이디"
          handler={handleError}
        />
        <SignInput
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="비밀번호"
          handler={handleError}
        />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
  text-align: center;
  font-size: 2rem;
`;
