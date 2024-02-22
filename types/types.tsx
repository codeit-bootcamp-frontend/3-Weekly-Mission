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
