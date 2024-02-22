import { MouseEventHandler } from "react";

export type ModalButtonClickType = ({
  currentTarget,
  url,
}: React.MouseEvent<HTMLButtonElement> & { url: string }) => void;

export type Samples = MouseEventHandler;
