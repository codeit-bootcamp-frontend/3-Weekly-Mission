export interface User {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

interface LinkContents {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}
export interface SampleFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: LinkContents[];
  count: number;
}

export interface Link {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string;
  url: string;
}
