import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
    return (
        <>
            <Head>
                <title>Linkbrary</title>
            </Head>
            <LinkWrapper>
                <Link href="/FolderPage">FolderPage 이동하기</Link>
                <Link href="/SharedPage">Sharedpage 이동하기</Link>
            </LinkWrapper>
        </>
    );
}

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
