import Link from "next/link";

export default function index() {
  return (
    <>
      <Link href="/folder/8">folder Page</Link>
      <br />
      <Link href="/shared/8">shared Page</Link>
    </>
  );
}
