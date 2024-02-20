"use client";

import styles from "./FolderSection.module.scss";
import { useEffect, useState } from "react";
import LinkSearchInput from "./LinkSearchInput";
import FolderList from "./FolderList";
import FolderName from "./FolderName";
import FolderContentCard from "./FolderContentCard";
import { UserFolder, UserLink, getUserLinks } from "../../api/api";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function FolderSection({ initialItems }) {
  const [selectedFolder, setSelectedFolder] = useState<
    UserFolder | Pick<UserFolder, "id" | "name">
  >({ id: undefined, name: "초기값" });
  const [items, setItems] = useState<UserLink[]>(initialItems);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function handleload() {
      const { id, name } = selectedFolder;
      if (searchTerm) {
        const response = await getUserLinks(4, id);
        const filteredLinks = response.filter(
          (link) =>
            (link.url && link.url.includes(searchTerm)) ||
            (link.title && link.title.includes(searchTerm)) ||
            (link.description && link.description.includes(searchTerm))
        );
        setItems(filteredLinks);
      } else if (name !== "초기값") {
        setItems(await getUserLinks(4, id));
      }
    }
    handleload();
  }, [selectedFolder, searchTerm]);
  const handleSelectFolder = (
    folder: UserFolder | Pick<UserFolder, "id" | "name">
  ) => {
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
        <FolderContentCard items={items} />
      </div>
    </section>
  );
}
