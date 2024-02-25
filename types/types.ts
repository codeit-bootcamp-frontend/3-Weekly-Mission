import { MouseEventHandler } from "react";

export type ModalButtonClickType = ({
  currentTarget,
  url,
}: React.MouseEvent<HTMLButtonElement> & { url: string }) => void;

export type Samples = MouseEventHandler;

export interface StringKeyValues {
  [key: string]: string;
}

export interface ValidatorType {
  required: string;
  pattern: {
    value: RegExp;
    message: string;
  };
}
