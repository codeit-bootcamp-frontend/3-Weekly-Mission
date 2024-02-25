import Link from "next/link";
// 12주차 심화, nextjs 정적렌더링 해야함
export default function index() {
  return (
    <>
      <Link href="/folder">folder Page</Link>
      <br />
      <Link href="/shared">shared Page</Link>
    </>
  );
}
