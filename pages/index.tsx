import { getUser } from "@/lib/api";
import { User } from "@/lib/types";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  let user;
  try {
    const resUser = await getUser();
    user = resUser.data[0];
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
}

const Home = ({ user }: { user: User }) => {
  if (!user) return <h1>...로딩 중...</h1>;

  return (
    <>
      <Nav user={user} />
      <main className={styles.main}>
        <nav className={styles.Links}>
          <Link href="/folder">폴더 페이지 바로가기</Link>
          <Link href="/share">공유 페이지 바로가기</Link>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Home;
