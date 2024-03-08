import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const SnsLogin = () => {
    return (
        <Wrapper>
            <Title>소셜 로그인</Title>
            <Links>
                <GoogleLink href="https://www.google.com">
                    <Image
                        src="/images/sign_google_icon.png"
                        alt="구글 아이콘"
                        width={22}
                        height={22}
                    />
                </GoogleLink>
                <KakaoLink href="https://www.kakaocorp.com/page">
                    <Image
                        src="/images/sign_kakao_icon.svg"
                        alt="카카오 아이콘"
                        width={26}
                        height={24}
                    />
                </KakaoLink>
            </Links>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
    background: var(--Linkbrary-gray10, #e7effb);
`;

const Title = styled.p`
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Links = styled.div`
    display: flex;
    gap: 16px;
`;

const GoogleLink = styled(Link)`
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/images/sign_google_background.svg");
`;

const KakaoLink = styled(Link)`
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/images/sign_kakao_background.svg");
`;
