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
