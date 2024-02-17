import { ModalInterface } from "../interfaces";

export type NoArgsNoReturnFunction = () => void;

export type ShowModal = (modalValue: ModalInterface) => void;

export type CloseModal = () => void;

export type SharedUserIdType = string | null;

export type SharedFolderIdType = string | null;
