import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Header = ({
    currentPath,
}: {
    currentPath: "signin" | "signup";
}) => {
    return (
        <SignHeader>
            <Link href="/">
                <Image
                    src="/images/sign_logo.svg"
                    alt="로고 이미지"
                    width={210.58}
                    height={38}
                />
            </Link>
            <SignHeaderLinkBox>
                {currentPath === "signin" ? (
                    <>
                        <div>회원이 아니신가요?</div>
                        <SignHeaderLink href="/signup">
                            회원 가입하기
                        </SignHeaderLink>
                    </>
                ) : (
                    <>
                        <div>이미 회원이신가요?</div>
                        <SignHeaderLink href="/signin">
                            로그인 하기
                        </SignHeaderLink>
                    </>
                )}
            </SignHeaderLinkBox>
        </SignHeader>
    );
};

const SignHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const SignHeaderLinkBox = styled.div`
    display: flex;
    gap: 8px;

    div {
        color: var(--black, #000);

        /* Linkbrary/body1-regular */
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
`;

const SignHeaderLink = styled(Link)`
    color: var(--Linkbrary-primary-color, #6d6afe);

    /* Linkbrary/body 1-semibold */
    font-family: Pretendard;
    font-size: 16px;
    text-decoration: underline;
    text-underline-offset: 4px;
`;
