import { useState } from "react";
import SharedLinks from "@/components/SharedLinks";
import SearchBar from "@/components/SearchBar";
import { SampleFolder, User } from "@/lib/types";
import { getSampleFolder, getUser } from "@/lib/api";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "@/styles/share.module.css";

export async function getStaticProps() {
  let user;
  let sampleFolder;
  try {
    const resUser = await getUser();
    const resSamplefolder = await getSampleFolder();
    user = resUser.data[0];
    sampleFolder = resSamplefolder.folder;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      sampleFolder,
    },
  };
}

const SharedPage = ({ user, sampleFolder }: { user: User; sampleFolder: SampleFolder }) => {
  const { owner, links, name } = sampleFolder ?? {};
  const [sharedPageLinks, setSharedPageLinks] = useState(links);

  if (!user && !sampleFolder) return <h1>...로딩중...</h1>;

  return (
    <>
      <Nav user={user} />
      <main className={styles.main}>
        <section className={styles["folder-info"]}>
          <div className={styles["folder-profile-image"]}>
            <Image fill src={owner.profileImageSource} alt={owner.name} />
          </div>
          <div className={styles["folder-profile-name"]}>@{owner.name}</div>
          <div className={styles["folder-name"]}>{name}</div>
        </section>
        <section className={styles["folder-links"]}>
          <div className={styles["SearchBar-wrapper"]}>
            <SearchBar setSharedPageLinks={setSharedPageLinks} />
          </div>
          <SharedLinks className={styles["SharedPage-folder-links"]} sharedPageLinks={sharedPageLinks} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedPage;
