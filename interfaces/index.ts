import { RefObject } from "react";
import { CloseModal } from "../types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ParsedUrlQuery } from "querystring";

export interface UserDataInterface {
    id: number;
    createdAt: string;
    name: string;
    imageSource: string | StaticImport;
    profileImageSource: string | StaticImport;
    email: string;
    authId: string;
}

export interface LinkInterface {
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

export interface signFormDataInterface {
    email: string;
    password: string;
}

export interface SharedPageFolderInfoInterface {
    id: number;
    created_at: string;
    name: string;
    user_id: number;
    favorite: boolean;
}

// ToDo 정리 예정

export interface UrlQuery extends ParsedUrlQuery {
    userId?: string;
    folderId?: string;
}

export interface SharedPageOwnerInfoInterface {
    authId: string;
    createdAt: string;
    email: string;
    id: number;
    imageSource: string;
    name: string;
}

export interface UserInterface {
    authId: string;
    createdAt: string;
    email: string;
    id: number;
    imageSource: string;
    name: string;
}

export interface SharedPageFolderInfoInterface {
    createdAt: string;
    favorite: boolean;
    id: number;
    name: string;
    userId: number;
}

export interface FolderInterface {
    createdAt: string;
    favorite: boolean;
    id: number;
    name: string;
    userId: number;
}

export interface Linkinterface {
    createdAt: string;
    description: string;
    folderId: number;
    id: number;
    imageSource: string;
    title: string;
    updatedAt: string;
    url: string;
}

export interface ModalInterface {
    type: string;
    folderName: string;
    sharingUrl: string;
    url: string;
}
