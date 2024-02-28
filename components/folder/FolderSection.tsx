"use client";

import styles from "./FolderSection.module.scss";
import { useState } from "react";
import LinkSearchInput from "./LinkSearchInput";
import FolderList from "./FolderList";
import FolderName from "./FolderName";
import FolderContentCard from "./FolderContentCard";
import { UserFolder, UserLink, getUserLinks } from "../../api/api";
import classNames from "classnames/bind";
import { useEffectAfterMount } from "../../hook/useInit";

const cx = classNames.bind(styles);
const initialUserFolder: UserFolder = {
  id: undefined,
  created_at: "",
  name: "전체",
  user_id: 0,
  favorite: false,
  link: {
    count: 0,
  },
};

export default function FolderSection({ initialItems }) {
  const [selectedFolder, setSelectedFolder] =
    useState<UserFolder>(initialUserFolder);
  const [items, setItems] = useState<UserLink[]>(initialItems);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffectAfterMount(() => {
    async function handleload() {
      const { id } = selectedFolder;
      setItems(await getUserLinks(4, id));
    }
    handleload();
  }, [selectedFolder]);
  const filteredLinks = items.filter(
    (link) =>
      (link.url && link.url.includes(searchTerm)) ||
      (link.title && link.title.includes(searchTerm)) ||
      (link.description && link.description.includes(searchTerm))
  );
  const handleSelectFolder = (folder: UserFolder) => {
    setSelectedFolder(folder);
  };

  return (
    <section className={cx("folder-section")}>
      <LinkSearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="foder-contents">
        <FolderList
          onSelectFolder={handleSelectFolder}
          selectedFolder={selectedFolder}
        />
        <FolderName selectedFolder={selectedFolder} />
        <FolderContentCard items={filteredLinks} />
      </div>
    </section>
  );
}
