import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <h1>메인페이지 입니다.</h1>
      <Link href="/folder">
        <h1>폴더 페이지 이동</h1>
      </Link>
      <Link href="/shared">
        <h1>공유 페이지 이동</h1>
      </Link>
      <Link href="/signin">
        <h1>로그인 페이지 이동</h1>
      </Link>
    </>
  );
}
