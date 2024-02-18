import CtaButton from "@/components/CtaButton/CtaButton";
import Link from "next/link";
import styled from "styled-components";

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Title>페이지를 찾을 수 없음!</Title>
      <Link href="/">
        <CtaButton>홈으로 가기</CtaButton>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 300px;
  margin-bottom: 300px;
  font-size: 3rem;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
