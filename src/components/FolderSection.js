import { useState } from "react";
import "./FolderSection.css";
import ForderSearchInput from "./FolderSearchInput";
import FolderList from "./FolderList";
import FolderName from "./FolderName";
import FolderContentCard from "./FolderContentCard";

export default function FolderSection() {
  const [selectedFolder, setSelectedFolder] = useState("$1");
  const handleSelectFolder = (folder) => {
    setSelectedFolder(folder);
  };

  return (
    <section>
      <ForderSearchInput />
      <div className="foder-contents">
        <FolderList
          onSelectFolder={handleSelectFolder}
          selectedFolder={selectedFolder}
        />
        <FolderName selectedFolder={selectedFolder} />
        <FolderContentCard selectedFolder={selectedFolder} />
      </div>
    </section>
  );
}
