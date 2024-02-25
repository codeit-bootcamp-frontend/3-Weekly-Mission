import "@/app/contents.css";

import SearchBar from "@/components/searchBar/SearchBar";
import CardList from "@/components/cardList/cardList";
import { FolderLink } from "@/api/api";

const SharedContents = async ({ folderLinks }: { folderLinks: FolderLink[] }) => {
  return (
    <section className="contents">
      <div className="card_list_container">
        <SearchBar isFolder={false} />
        {folderLinks.length === 0 ? (
          <div className="empty_card_list">저장된 링크가 없습니다.</div>
        ) : (
          <CardList folderLinks={folderLinks} isFunctional={false} />
        )}
      </div>
    </section>
  );
};

export default SharedContents;
