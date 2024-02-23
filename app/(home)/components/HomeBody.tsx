import Link from 'next/link';

export default function HomeBody() {
  return (
    <>
      <div>
        <Link href="/shared">Shared page</Link>
      </div>
      <div>
        <Link href="/folder">Folder page</Link>
      </div>
      <div>
        <Link href="/signup">Signup page</Link>
      </div>
    </>
  );
}
