export interface Props_PopupMessage {
  modalOpen: boolean;
  component: any;
  onClick: (p: boolean) => void;
}

export interface Props_Fnc {
  value: string;
}

export interface Props_folders {
  created_at?: string;
  url?: string;
  title?: string;
  description?: string;
  image_source?: string;
}

export interface Props_TimeAgo {
  time: string;
}

export interface Link {
    id: number;
    created_at: string;
    updated_at?: Date;
    url: string;
    title: string;
    description: string;
    image_source: string;
    folder_id?: number;
}

export interface Folder {
    id: number;
    created_at: string;
    updated_at: null | string;
    url: string;
    title: string;
    description: string;
    image_source: string;
    folder_id: number;
    name: string
}

export interface CurrentFolder {
  id: null | number;
  name: string;
}

interface count {
  count: number;
}

export interface MyFolders {
    id: number;
    created_at: string;
    name: string;
    user_id: number;
    favorite: boolean;
    link: count;
}

export interface userData {
    id: string;
    name: string;
    email: string;
    profileImageSource: string;
}

interface Owner {
  id: string;
  name: string;
  profileImageSource: string;
}

interface OwnerLinks {
  id: string;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export interface OwnerData {
  id: string;
  name: string;
  owner: Owner;
  links: OwnerLinks[];
  count: string;
}
