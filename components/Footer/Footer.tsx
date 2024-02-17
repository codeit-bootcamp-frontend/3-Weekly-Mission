import Link from "next/link";
import { styled, css } from "styled-components";
import { forwardRef } from "react";
import Image from "next/image";
import facebook from "@/public/images/facebook_icon.svg";
import twitter from "@/public/images/twitter_icon.svg";
import youtube from "@/public/images/youtube_icon.svg";
import instagram from "@/public/images/instagram_icon.svg";

import React from "react";

export default forwardRef<HTMLDivElement>(function Footer(props, ref) {
    return (
        <FooterWrap ref={ref}>
            <FooterContainer>
                <FooterCodeitBox>©codeit - 2023</FooterCodeitBox>
                <FooterPrivacyPolicyAndFaqBox>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/faq">FAQ</Link>
                </FooterPrivacyPolicyAndFaqBox>
                <FooterSnsLinkBox>
                    <Link href="https://www.facebook.com" target="_blank">
                        <Image src={facebook} alt="페이스북 링크 아이콘" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank">
                        <Image src={twitter} alt="트위터 링크 아이콘" />
                    </Link>
                    <Link href="https://www.youtube.com" target="_blank">
                        <Image src={youtube} alt="유튜브 링크 아이콘" />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank">
                        <Image src={instagram} alt="인스타그램 링크아이콘" />
                    </Link>
                </FooterSnsLinkBox>
            </FooterContainer>
        </FooterWrap>
    );
});

const FooterWrap = styled.footer`
    box-sizing: border-box;
    padding: 32px 104px 64px;
    background: #111322;

    @media (max-width: 767px) {
        padding: 32px;
    }
`;

const FooterContainer = styled.footer`
    max-width: 1712px;
    display: grid;
    grid-template-areas: "codeit privacy-policy-and-faq link";
    justify-content: space-between;
    margin: 0 auhref;

    @media (max-width: 767px) {
        grid-template-areas:
            "privacy-policy-and-faq link"
            "codeit empty";
        align-items: start;
    }
`;

const FooterFont = css`
    color: #676767;
    font-family: Abel;
    font-size: 16px;
`;

const FooterCodeitBox = styled.div`
    ${FooterFont}
    grid-area: codeit;
`;

const FooterPrivacyPolicyAndFaqBox = styled.div`
    ${FooterFont}
    grid-area: privacy-policy-and-faq;
    display: flex;
    gap: 30px;

    Link {
        ${FooterFont}
    }

    @media (max-width: 767px) {
        margin-bothrefm: 60px;
    }
`;

const FooterSnsLinkBox = styled.div`
    ${FooterFont}
    grid-area: link;
    display: flex;
    align-items: center;
    gap: 12px;
`;
