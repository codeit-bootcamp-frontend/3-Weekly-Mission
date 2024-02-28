'use client';

import Image from 'next/image';
import SignForm from './components/SignForm';
import styled from 'styled-components';
import Link from 'next/link';

export default function Signup() {
  return (
    <Wrapper>
      <Container>
        <LoginBox>
          <LoginBox_top>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={133} height={24} />
            </Link>
            <GoToSignUp>
              <span>이미 회원이신가요?</span>
              <GoToSignUpLink href="/signin">로그인 하기</GoToSignUpLink>
            </GoToSignUp>
          </LoginBox_top>
          <SignForm category="signup" />
        </LoginBox>
        <SnsLogin>
          <Text>다른 방식으로 가입하기</Text>
          <SnsLogo>
            <Link href="https://google.com">
              <Image
                src={'/google-logo.svg'}
                alt="google-logo"
                width={42}
                height={42}
              />
            </Link>
            <Link href="https://kakao.com">
              <Image
                src={'/kakao-logo.svg'}
                alt="kakao-logo"
                width={42}
                height={42}
              />
            </Link>
          </SnsLogo>
        </SnsLogin>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0;
  background: var(--linkbrary-bg, #f0f6ff);
  display: flex;
  padding: 238px 0 253px 0;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
const LoginBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const LoginBox_top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const GoToSignUp = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;
const GoToSignUpLink = styled(Link)`
  color: var(--linkbrary-primary-color, #6d6afe);
  &:visited {
    color: var(--linkbrary-primary-color, #6d6afe);
  }
`;
const SnsLogin = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-gray-10, #e7effb);
`;
const Text = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const SnsLogo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
