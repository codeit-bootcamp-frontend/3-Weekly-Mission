import Link from "next/link";

export default function index() {
  return (
    <>
      <Link href="/folder">folder Page</Link>
      <br />
      <Link href="/shared">shared Page</Link>
    </>
  );
}
