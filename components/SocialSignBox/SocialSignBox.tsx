import {
  googleBg,
  googleIcon,
  socialKakaoBg,
  socialKakaoIcon,
} from "@/public/img";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

export default function SocialSignBox({ text }: Props) {
  return (
    <Wrapper>
      <Container>
        <Span>{text}</Span>
        <IconContainer>
          <IconButton
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image fill src={googleBg} alt="구글로그인 버튼 배경이미지" />
            <Icon width={22} height={22} src={googleIcon} alt="구글아이콘" />
          </IconButton>
          <IconButton
            href="https://www.kakaocorp.com/page"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image fill src={socialKakaoBg} alt="구글로그인 버튼 배경이미지" />
            <Icon
              width={22}
              height={22}
              src={socialKakaoIcon}
              alt="구글아이콘"
            />
          </IconButton>
        </IconContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-gray10, #e7effb);
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #373740;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 16px;
`;
const IconButton = styled(Link)`
  position: relative;
  width: 42px;
  height: 42px;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
`;

const Icon = styled(Image)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
