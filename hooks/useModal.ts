import { Dispatch, SetStateAction, useState } from "react";

export interface IModal {
  state?: boolean;
  target?: string;
  folderName?: string;
  url?: string;
}

export default function useModal(): [
  IModal,
  Dispatch<SetStateAction<IModal>>,
  () => void
] {
  const [modalState, setModalState] = useState<IModal>({
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
