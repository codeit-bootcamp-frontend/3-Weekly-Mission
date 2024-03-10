import Link from "next/link";

export async function getServerSideProps() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/linkbrary/v1/users/1/folders"
  );
  const result = await response.json();
  return {
    props: {
      result,
    },
  };
}

interface Props {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  link_count: number;
}
export default function index({ result }: { result: Props[] }) {
  return (
    <>
      <h1>Shared Folders</h1>
      {result.map((item) => (
        <Link key={item.id} href={`/shared/${item.id}`}>
          <h2>{item.name} Page</h2>
        </Link>
      ))}

      <br />
      <Link href="/folder">
        <h1>folder Page</h1>
      </Link>
    </>
  );
}
