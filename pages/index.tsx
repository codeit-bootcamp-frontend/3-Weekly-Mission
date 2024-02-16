import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link style={{ color: "#000", fontSize: "2rem" }} href="/folder">
        폴더페이지로 가기
      </Link>
    </div>
  );
}
