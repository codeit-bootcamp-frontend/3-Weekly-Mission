import Head from "next/head";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
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
      <Link href="/singup">
        <p>singup</p>
      </Link>
    </>
  );
};

export default Home;
