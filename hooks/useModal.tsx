import { ModalInterface } from "@/types/types";
import { useState } from "react";

const INITIAL: ModalInterface = {
  show: false,
};

export default function useModal() {
  const [modal, setModal] = useState(INITIAL);

  const handleOpen = (modal: ModalInterface) => {
    setModal((prev) => {
      return { ...prev, ...modal };
    });
  };

  const handleClose = () => {
    setModal((prev) => {
      return { ...prev, ...INITIAL };
    });
  };

  return { modal, handleOpen, handleClose };
}
