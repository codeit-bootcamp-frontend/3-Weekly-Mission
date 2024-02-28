import addImage from "assets/add.svg";
import PopupMessage from "components/modal";
import AddFolderModal from "components/modal/addFolderModal";
import { useState } from "react";

export default function AddFolder() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsopen(!isOpen);
  };
  const isClose = (value: boolean) => {
    setIsopen(value);
  };

  return (
    <div className="AddFolder" onClick={handleClick}>
      <img src={addImage} alt="" />
      <PopupMessage
        modalOpen={isOpen}
        onClick={isClose}
        component={<AddFolderModal folder="" isSubtext={false} />}
      />
    </div>
  );
}
