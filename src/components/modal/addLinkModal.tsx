import "components/modal/addLinkModal.css";
import { useState, useEffect } from "react";
import CHECKIMG from "assets/check.svg";
import { getMyFolders } from "components/main/api/Api";
import { MyFolders } from "types";

interface PropsTitles {
  title: string;
  subtitle: string;
}

function Titles({ title, subtitle }: PropsTitles) {
  return (
    <div className="titles">
      <div className="title">{title}</div>
      <div className="subTitle">{subtitle}</div>
    </div>
  );
}

// --------------------------------------------------------------------------------

interface PropsFolder {
  title: string;
  linksCount: number;
}

function Folder({ title, linksCount }: PropsFolder) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="folder" onClick={handleClick}>
      {isChecked && <img className="check" src={CHECKIMG} alt={title} />}
      <div className="textBundle">
        <div className="title">{title}</div>
        <div className="linksCount">{linksCount}</div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------------

interface PropsFolders {
  folders: MyFolders[];
}

function Folders({ folders }: PropsFolders) {
  return (
    <div className="Folders">
      {folders.map((folder) => <Folder key={folder.id} title={folder.name} linksCount={folder.link.count}/> )}
    </div>
  );
}

// --------------------------------------------------------------------------------

export default function AddLinkModal() {
  const [data, setData] = useState<MyFolders[]>([]);

  const getFolders = async () => {
    const { data } = await getMyFolders();
    setData(data);
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <div className="AddLinkModal">
      <Titles title={"폴더에 추가"} subtitle={"링크주소"} />
      <Folders folders={data} />
      <div className="button">
        <span className="text">추가하기</span>
      </div>
    </div>
  );
}
