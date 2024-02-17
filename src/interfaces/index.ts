import { RefObject } from "react";
import { CloseModal } from "../types";

export interface ModalInterface {
    type: string;
    folderName: string;
    sharingUrl: string;
    url: string;
}

export interface FolderPageUserDataInterface {
    id: number;
    createdAt: string;
    name: string;
    imageSource: string;
    email: string;
    authId: string;
}

export interface SharedPageUserDataInterface {
    email: string;
    id: number;
    name: string;
    profileImageSource: string;
}

export interface CardInterface {
    id: number;
    createdAt: string;
    updatedAt: string | null;
    url: string;
    title: string;
    description: string;
    imageSource: string;
    folderId: number;
}

export interface FolderDataInterface {
    id: number;
    createdAt: string;
    name: string;
    userId: number;
    favorite: boolean;
    link: {
        count: number;
    };
}

export interface SharedPageInfoLinksInterface {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
}

export interface SharedPageInfoInterface {
    id: number;
    name: string;
    owner: {
        id: number;
        name: string;
        profileImageSource: string;
    };
    links: SharedPageInfoLinksInterface[];
    count: number;
}

export interface LinkCreatorRefsInterface {
    linkCreatorDom: RefObject<HTMLDivElement> | null;
    linkCreatorWrapperDom: RefObject<HTMLDivElement> | null;
}

export interface ModalProps {
    modal?: ModalInterface;
    onCloseModalButtonClick: CloseModal;
}
