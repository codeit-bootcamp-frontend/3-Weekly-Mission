import { useState, useEffect } from "react";
import { More } from "components/main/more";
import TimeAgo from "components/main/MainFileTimeAgo";
import STAR_IMAGE from "assets/star.svg";
import KEBAB_IMAGE from "assets/kebab.svg";
import TEMP_IMAGE from "assets/logo.svg";
import { Link, MyFolders } from "types"
import { getMyFolders } from "./api/Api";

interface FileProps {
  file: {
    id: number;
    created_at: string;
    url: string;
    title: string;
    description: string;
    image_source: string | null;
  };
}

const File = ({file}: FileProps) => {
  const { created_at, url, title, description, image_source } = file;
  const [kebabLoad, setKebabLoad] = useState<boolean>(false);
  const [isLightOn, setIsLightOn] = useState<boolean>(false);
  const [folders, setFolders] = useState<MyFolders[]>([]);

  let year: number;
  let month: number;
  let date: number;
  let editedTime: string;

  const getFolderList = async () => {
    try {
      const { data } = await getMyFolders();
      setFolders(data);
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  useEffect(() => {
    setKebabLoad(false);
    getFolderList();
  }, []);

  const handleClick: React.MouseEventHandler<HTMLImageElement> = () => {
    window.open(url, "_blank");
  };

  const handleKebab: React.MouseEventHandler<HTMLImageElement> = () => {
    setKebabLoad(!kebabLoad);
  };

  const handleLight: React.MouseEventHandler<HTMLImageElement> = () => {
    setIsLightOn(!isLightOn);
  };

  year = new Date(created_at).getFullYear();
  month = new Date(created_at).getMonth();
  date = new Date(created_at).getDate();
  editedTime = year + "-" + (month + 1) + "-" + date;

  return (
    <div className="File">
      {isLightOn ? (
        <img
          className="starOff"
          src={STAR_IMAGE}
          alt="즐겨찾기 추가하기"
          onClick={handleLight}
        />
      ) : (
        <img
          className="starOn"
          src={STAR_IMAGE}
          alt="즐겨찾기 해제하기"
          onClick={handleLight}
        />
      )}
      <div className="item01" onClick={handleClick}>
        <img
          className="fileImage"
          src={image_source === null ? TEMP_IMAGE : image_source}
          alt={title}
        />
      </div>
      <div className="item02">
        <img
          className="kebab"
          src={KEBAB_IMAGE}
          alt="더보기"
          onClick={handleKebab}
        />
        <TimeAgo time={created_at} />
        <div className="description">{description}</div>
        <div className="editTime">{editedTime}</div>
        {kebabLoad && <More folder={folders} />}
        {/* folders.name 으로 수정 필요  */}
      </div>
    </div>
  );
}

interface MainFilesProps {
  folders: Link[];
}

export const MainFiles = ({ folders }: MainFilesProps) => {
  return (
    <div className="MainFiles">
      <div className="files">
        {folders.map((folder) => (
          <File key={folder.id} file={folder} />
        ))}
      </div>
    </div>
  );
}
