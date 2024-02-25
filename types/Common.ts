// API 반환값 Types

// getFolder
export interface Folder {
  id: number;
  name: string;
  link: { count: number };
  favorite: boolean;
  user_id: number;
  created_at: string;
}

// getFolderLinks
export interface FolderLink {
  createdAt?: string | undefined;
  created_at: string;
  description: string | null;
  folder_id: number | null;
  id: string | number;
  imageSource?: string | null | undefined;
  image_source: string | null;
  title: string | null;
  updated_at: string | null;
  url: string | null;
}

// getUser
export interface User {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

// getFolderSample
export interface FolderSample {
  count: number;
  id: number;
  links: FolderLink[];
  name: string;
  owner: Owner;
}
interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

// Types
export interface SelectedFolder {
  name: string;
  id: string | number;
}

export interface FolderManagementButton {
  iconSource: string;
  text: string;
}

export interface SignUser {
  email: string;
  password: string;
}

export interface SignAccess {
  accessToken: string | undefined | null;
  refreshToken?: string;
}

export interface DuplicateEmail {
  isUsableNickname: boolean;
}
