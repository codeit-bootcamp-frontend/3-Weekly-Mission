import Head from "next/head";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    // 편하게 이동하기 위한 링크 및 컴포넌트 테스트 페이지
    <>
      <Head>
        <title>LinkLibrary</title>
      </Head>
      <div>HOMEPAGE</div>
      <Link href="/folder">
        <p>folder</p>
      </Link>
      <Link href="/shared">
        <p>shared</p>
      </Link>
      <Link href="/signin">
        <p>signIn</p>
      </Link>
      <Link href="/signup">
        <p>signup</p>
      </Link>
    </>
  );
};

export default Home;
