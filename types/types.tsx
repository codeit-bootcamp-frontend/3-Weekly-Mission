import { ReactNode } from "react";

export interface FolderInterface {
  created_at?: string;
  id?: string;
  link?: { count: number };
  name: string;
  user_id?: number;
}

export interface ModalInterface {
  component?: ReactNode;
  show: boolean;
}

export interface CardInterface {
  created_at?: string;
  description?: string;
  folder_id?: string;
  id?: string;
  image_source?: string;
  title?: string;
  updated_at?: string;
  url: string;
  createdAt?: string;
  imageSource?: string;
}

export interface ModalProps {
  children?: ReactNode;
  onClick?: () => void;
}

export interface SharedFolderInterface {
  folder: {
    id: string;
    links: CardInterface[];
    name: string;
    owner: {
      id: string;
      name: string;
      profileImageSource?: string;
    };
  };
}

export interface SharedUserInterface {
  id: string;
  name: string;
  email: string;
  profileImageSource?: string;
}

export interface UserInterface {
  id: string;
  created_at: string;
  name: string;
  image_source?: string;
  email: string;
  auth_id: string;
}
