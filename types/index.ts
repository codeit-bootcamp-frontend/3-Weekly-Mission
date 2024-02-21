import { ModalInterface } from "../interfaces";

export type ShowModal = (modalValue: ModalInterface) => void;

export type CloseModal = () => void;

export type SharedUserIdType = string | string[] | undefined | null;

export type SharedFolderIdType = string | string[] | undefined | null;
