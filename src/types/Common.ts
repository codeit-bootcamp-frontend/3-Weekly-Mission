// API 반환값 Types

// getFolder
export interface Folder {
  id: string | number;
  name: string;
  link_count: number;
  favorite: boolean;
  user_id: number;
  created_at: string;
}

// getFolderLinks
export interface FolderLink {
  created_at: string;
  description: string | null;
  favorite: boolean;
  id: string | number;
  image_source: string | null;
  title: string | null;
  url: string | null;
}

// getUser
export interface User {
  created_at?: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

// Types
export interface SelectedFolder {
  id: string | number;
  name: string;
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
  accessToken: string;
  refreshToken: string;
}

export interface DuplicateEmail {
  isUsableNickname: boolean;
}
