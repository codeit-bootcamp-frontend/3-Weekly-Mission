import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { UserDataInterface } from "@/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUser } from "@/apis/api";
import { getRefinedUser } from "@/apis/services";

// 컴포넌트의 props 타입 정의의 경우 항상 해줘야한다.
interface HeaderProps {
    login: boolean;
}

interface UserInterface {
    id: number;
    name: string;
    imageSource: string;
    email: string;
}

const Header = ({ login }: HeaderProps) => {
    const { route } = useRouter();

    const [user, setUser] = useState<UserInterface>({
        id: 0,
        name: "",
        imageSource: "",
        email: "",
    });

    useEffect(() => {
        (async () => {
            const { id, name, email, imageSource } = await getRefinedUser();
            setUser({ id, name, email, imageSource });
        })();
    });

    if (!user) {
        return null;
    }
    // shared 페이지
    if (route.includes("shared")) {
        return (
            <HeaderWrap>
                <HeaderContainer>
                    <HeaderLogoImgBox href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="로고 이미지"
                            width={133}
                            height={24}
                        />
                    </HeaderLogoImgBox>
                    {login ? (
                        <HeaderProfileBox>
                            <Image
                                src={user?.imageSource}
                                alt="프로필 이미지"
                                width={28}
                                height={28}
                            />
                            <div>{user?.email}</div>
                        </HeaderProfileBox>
                    ) : (
                        <HeaderLoginInButton type="button">
                            <Link href="/signin">로그인</Link>
                        </HeaderLoginInButton>
                    )}
                </HeaderContainer>
            </HeaderWrap>
        );
    }
    // folder 페이지
    if (route.includes("folder")) {
        return (
            <HeaderWrap>
                <HeaderContainer>
                    <HeaderLogoImgBox href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="로고 이미지"
                            width={133}
                            height={24}
                        />
                    </HeaderLogoImgBox>
                    {login ? (
                        <HeaderProfileBox>
                            <Image
                                src={user?.imageSource}
                                alt="프로필 이미지"
                                width={28}
                                height={28}
                            />
                            <div>{user?.email}</div>
                        </HeaderProfileBox>
                    ) : (
                        <HeaderLoginInButton type="button">
                            <Link href="/signin">로그인</Link>
                        </HeaderLoginInButton>
                    )}
                </HeaderContainer>
            </HeaderWrap>
        );
    }
    return null;
};

const HeaderWrap = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 32px 200px;
    background: var(--gray5);
    position: fixed;
    z-index: 2000;

    @media (max-width: 1123px) and (min-width: 768px) {
        padding: 20px 32px;
    }

    @media (max-width: 767px) {
        padding: 18px 32px 17px;
    }
`;

const HeaderContainer = styled.div`
    max-width: 1920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 1123px) and (min-width: 768px) {
        width: 800px;
    }

    @media (max-width: 864px) {
        width: auto;
    }

    @media (max-width: 767px) {
        width: 100%;
    }
`;

const HeaderLogoImgBox = styled(Link)`
    width: 133px;
    height: 24px;

    @media (max-width: 767px) {
        width: 88px;
        height: 16px;
    }
`;

const HeaderProfileBox = styled.div`
    display: flex;
    align-items: center;

    img {
        border-radius: 50%;
        margin-right: 6px;
    }
    div {
        color: var(--Linkbrary-gray100, #373740);
        font-family: Pretendard;
        font-size: 14px;

        @media (max-width: 767px) {
            display: none;
        }
    }
`;

const HeaderLoginInButton = styled.button`
    width: 128px;
    border-radius: 8px;
    padding: 16px 20px;
    color: var(--Grey-Light, #f5f5f5);
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(
        --gra-purpleblue-to-skyblue,
        linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
`;

export default Header;
