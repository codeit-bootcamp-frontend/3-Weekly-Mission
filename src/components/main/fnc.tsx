import { useState } from "react";
import PopupMessage from "components/modal";
import ShareModal from "components/modal/shareModal";
import ChangeNameModal from "components/modal/changeNameModal";
import DeleteModal from "components/modal/deleteModal";
import { Props_Fnc } from "types";

export default function Fnc({ value }: Props_Fnc) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="Fnc">
      <div className="text" onClick={handleClick}>
        {value}
      </div>
      {`${value}` === "삭제" ? (
        <PopupMessage
          component={<DeleteModal />}
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      ) : `${value}` === "공유" ? (
        <PopupMessage
          component={<ShareModal />}
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      ) : (
        <PopupMessage
          component={<ChangeNameModal />}
          modalOpen={isModalOpen}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
