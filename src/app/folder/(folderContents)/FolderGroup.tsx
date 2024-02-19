import { FolderGroupInfo } from "@/api/api";
import "./folderContents.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface FolderGroupProps {
  folderGroup: FolderGroupInfo[];
}

const FolderGroup: React.FC<FolderGroupProps> = ({ folderGroup }) => {
  const path = decodeURIComponent(usePathname()).split("/")[2];

  const createFolderGroup = () => {
    return folderGroup.map((folder) => {
      const toggleClass = String(path) === String(folder.id) ? "folder_group_item folder_toggle" : "folder_group_item";

      return (
        <>
          <li className={toggleClass} key={folder.id}>
            <Link href={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>
        </>
      );
    });
  };

  return (
    <>
      <ul className="folder_group">{createFolderGroup()}</ul>
    </>
  );
};

export default FolderGroup;
