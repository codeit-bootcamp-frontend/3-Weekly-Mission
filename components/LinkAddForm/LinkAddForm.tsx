import styled from "styled-components";
import imageData from "@/public/imageData";
import CtaButton from "../CtaButton/CtaButton";
import { FormEvent } from "react";
import Image from "next/image";

export default function LinkAddForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Image
          width={16}
          height={16}
          src={imageData.chainIcon}
          alt="링크 추가하기 아이콘"
        />
      </div>

      <Input placeholder="링크를 추가해 보세요." />
      <CtaButton>추가하기</CtaButton>
    </Form>
  );
}

const Form = styled.form`
  margin: 0 auto;
  padding: 15px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 80rem;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);

  @media screen and (max-width: 1124px) {
    max-width: 704px;
  }

  @media screen and (max-width: 765px) {
    max-width: 325px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
  left: 16px;
  text-align: center;
`;
