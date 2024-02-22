import { useState } from "react";
import Image from "next/image";
import CardAddModal from "@/components/modals/CardAddModal/CardAddModal";
import CardDeleteModal from "@/components/modals/CardDeleteModal/CardDeleteModal";
import { CardInterface, FolderInterface, ModalInterface } from "@/types/types";
import * as S from "./Kebab.style";

interface Props {
  card: CardInterface;
  onClick: (m: ModalInterface) => void;
  folderList?: FolderInterface[];
}

function Menu({ card, onClick, folderList }: Props) {
  const handleClick = (id: string) => {
    if (id === "cardDelete") {
      const newModal = {
        component: <CardDeleteModal card={card} />,
        show: true,
      };
      onClick(newModal);
    }
    if (id === "cardAdd") {
      const newModal = {
        component: <CardAddModal folderList={folderList} card={card} />,
        show: true,
      };
      onClick(newModal);
    } else {
      return;
    }
  };

  return (
    <>
      <S.MenuDiv>
        <S.MenuButton
          onClick={() => {
            handleClick("cardDelete");
          }}
        >
          삭제하기
        </S.MenuButton>
        <S.MenuButton
          onClick={() => {
            handleClick("cardAdd");
          }}
        >
          폴더에 추가
        </S.MenuButton>
      </S.MenuDiv>
    </>
  );
}

export default function Kebab({ card, folderList, onClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <>
      <S.KebabDiv>
        <S.KebabButton onClick={handleOpen} onBlur={handleClose}>
          <Image
            src={"/assets/Icons/kebab.svg"}
            alt="케밥 아이콘 이미지"
            width={21}
            height={17}
          />
        </S.KebabButton>
        {isOpen && (
          <Menu folderList={folderList} onClick={onClick} card={card} />
        )}
      </S.KebabDiv>
    </>
  );
}
