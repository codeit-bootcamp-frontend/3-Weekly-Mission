import { ReactNode } from "react";

export interface FolderLink {
  id: number;
  created_at: Date;
  updated_at: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: string;
}

export interface SampleFolderLink {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface User {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface Folder {
  id: number;
  createdAt: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  links: {
    count: number;
  };
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface SampleFolder {
  id: number;
  name: string;
  owner: Owner;
  links: SampleFolderLink[];
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface FormInput {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface AuthButtonProps {
  children: ReactNode;
}

export interface SocialLoginProps {
  children: ReactNode;
}

export interface CheckEmail {
  isUsableNickname: boolean;
  error: string;
}
