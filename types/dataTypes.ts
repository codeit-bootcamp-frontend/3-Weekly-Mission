export interface FolderData {
  id: number;
  createdAt: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface FolderOwnerData {
  name: string;
  imageSource: string;
}

export interface OwnerData extends FolderOwnerData {
  id: number;
  createdAt: string;
  email: string;
  authId: string;
}

export interface CardItem {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  url: string;
  title: string | null;
  description: string | null;
  imageSource: string | null;
  folderId: number | null;
}
