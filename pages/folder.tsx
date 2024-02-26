import { MouseEvent, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AddLinkBar from "@/components/AddLinkBar";
import SearchBar from "@/components/SearchBar";
import FilterButton from "@/components/FilterButton";
import Folders from "@/components/FolderItem";
import { getUser, getFolder, getFolderLinks } from "@/lib/api";
import { FolderLink, User, Folder } from "@/lib/types";
import Image from "next/image";
import styles from "@/styles/folder.module.css";

export async function getStaticProps() {
  let user;
  let folder;
  let folderLinks;
  try {
    const resUser = await getUser();
    const resfolder = await getFolder();
    const resfolderLinks = await getFolderLinks();
    user = resUser.data[0];
    folder = resfolder.data;
    folderLinks = resfolderLinks.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      folder,
      folderLinks,
    },
  };
}

const FolderPage = ({ user, folder, folderLinks }: { user: User; folder: Folder[]; folderLinks: FolderLink[] }) => {
  const [keyword, setKeyword] = useState("전체");
  const [folderId, setFolderId] = useState(0);
  const [folderPageLinks, setFolderPageLinks] = useState<FolderLink[]>(folderLinks);

  const handleButtonClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const buttonElement = e.target as HTMLButtonElement;

    if (buttonElement && buttonElement.textContent) {
      setKeyword(buttonElement.textContent);
      const folderId = Number(buttonElement.id);
      setFolderId(folderId);
      const links = await getFolderLinks(folderId);
      setFolderPageLinks(links.data);
    }
  };

  if (!user && !folder && !folderLinks) {
    return <h1>...로딩중...</h1>;
  }

  return (
    <>
      <Nav user={user} />
      <main className={styles.main}>
        <section className={styles["AddLinkBar-section"]}>
          <div className={styles["AddLinkBar-wrapper"]}>
            <AddLinkBar />
          </div>
        </section>

        <section className={styles["FolderPage-section"]}>
          <div className={styles["SearchBar-wrapper"]}>
            <SearchBar folderId={folderId} setFolderPageLinks={setFolderPageLinks} />
          </div>
          <div className={styles["FilterButton-container"]}>
            <div className={styles["FilterButton-wrapper"]}>
              <li>
                <FilterButton handleButtonClick={handleButtonClick}>전체</FilterButton>
              </li>
              {folder?.length &&
                folder.map((item) => (
                  <li key={item.id}>
                    <FilterButton handleButtonClick={handleButtonClick} id={item.id}>
                      {item.name}
                    </FilterButton>
                  </li>
                ))}
            </div>
            <button className={styles["add-button"]}>
              <div className={styles["add-icon"]}>
                <Image fill src="/assets/add.svg" alt="필터링 폴더를 새로 생성하는 버튼" />
              </div>
            </button>
          </div>

          <div className={styles["FolderPage-setting-wrapper"]}>
            <div className={styles["FolderPage-setting"]}>
              <div className={styles["FilterButton-text"]}>{keyword}</div>
              {keyword === "전체" ? null : (
                <div className={styles["setting-buttons"]}>
                  <button className={styles["setting-button"]}>
                    <div className={styles["icon"]}>
                      <Image fill src="/assets/share.svg" alt="공유 버튼" />
                    </div>
                    <span className={styles["button-name"]}>공유</span>
                  </button>
                  <button className={styles["setting-button"]}>
                    <div className={styles["icon"]}>
                      <Image fill src="/assets/pen.svg" alt="이름 변경 버튼" />
                    </div>
                    <span className={styles["button-name"]}>이름 변경</span>
                  </button>
                  <button className={styles["setting-button"]}>
                    <div className={styles["icon"]}>
                      <Image fill src="/assets/delete.svg" alt="삭제 버튼" />
                    </div>
                    <span className={styles["button-name"]}>삭제</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className={styles["FolderItem-wrapper"]}>
            {folderPageLinks.length && folder?.length ? (
              <div className={styles["FolderItem-folder-links"]}>
                {folderPageLinks.map((link) => (
                  <Folders key={link.id} link={link} />
                ))}
              </div>
            ) : (
              <div className={styles["FolderItem-error-message"]}>저장된 링크가 없습니다</div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FolderPage;
