import { Dispatch, SetStateAction, useState } from "react";
type target =
  | "공유"
  | "이름 변경"
  | "삭제"
  | "폴더추가"
  | "삭제하기"
  | "폴더에 추가"
  | "추가하기"
  | "";

export interface Modal {
  state?: boolean;
  target?: target;
  folderName?: string;
  url?: string;
}

export default function useModal(): [
  Modal,
  Dispatch<SetStateAction<Modal>>,
  () => void
] {
  const [modalState, setModalState] = useState<Modal>({
    state: false,
    target: "",
    folderName: "",
    url: "",
  });

  const handleModalCancel = () =>
    setModalState({
      state: false,
    });

  return [modalState, setModalState, handleModalCancel];
}
