import { useEffect, useState } from "react";
import { getFoldersByUserId } from "@/lib/api";
import { useRouter } from "next/router";
import classNames from "classnames";
import style from "./FolderSelector.module.scss";

type Folder = {
  created_at: string;
  favorite: boolean;
  id: number;
  link: object;
  name: string;
  user_id: number;
};

export default function FolderSelector({ className, onClick }: any) {
  const [folders, setFolders] = useState<Folder[]>([]);
  const router = useRouter();

  const handleClick = () => {
    router.push(`${router.pathname}?folderId=`);
    onClick("전체");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getFoldersByUserId(1);
        if (!data) return;
        setFolders(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul className={classNames(style.selectMenus, className)}>
      <li onClick={handleClick}>전체</li>
      {folders.map((folder) => (
        <Folder key={folder.id} folderInfo={folder} onClick={onClick} />
      ))}
    </ul>
  );
}

function Folder({ folderInfo, onClick }: any) {
  const { name: folderName, id: folderId } = folderInfo;
  const router = useRouter();

  const handleClick = () => {
    const currentPath = router.pathname;
    router.push(`${currentPath}?folderId=${folderId}`);
    onClick(folderName);
  };

  return <li onClick={handleClick}>{folderName}</li>;
}
