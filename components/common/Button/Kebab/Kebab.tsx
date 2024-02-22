import { CardInterface, FolderInterface, ModalInterface } from "@/types/types";

interface Props {
  card: CardInterface;
  onClick: (m: ModalInterface) => void;
  folderList?: FolderInterface[];
}

export default function Kebab({ card, onClick, folderList}: Props) {
  const handleClick = (id: string) => {
    if (id === "cardDelete") {
      const newModal = {
        component: <
      }
    }
  }
}