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

// getLinks
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

// constants types
export interface Times {
  ONE_MINUTE_AGO: string;
  MINUTES_AGO: string;
  ONE_HOUR_AGO: string;
  HOURS_AGO: string;
  ONE_DAY_AGO: string;
  DAYS_AGO: string;
  ONE_MONTH_AGO: string;
  MONTHS_AGO: string;
  ONE_YEAR_AGO: string;
  YEARS_AGO: string;
}

export interface Api {
  ROOT: string;
  USER_SAMPLE: string;
  FOLDER_SAMPLE: string;
  USER: string;
  FOLDER: string;
  FOLDER_LINK: string;
}

export interface ManagementActions {
  SHARE: string;
  EDIT_NAME: string;
  DELETE: string;
}

export interface SocialLinks {
  FACEBOOK: {
    NAME: string;
    URL: string;
    ICON: string;
  };
  TWITTER: {
    NAME: string;
    URL: string;
    ICON: string;
  };
  YOUTUBE: {
    NAME: string;
    URL: string;
    ICON: string;
  };
  INSTAGRAM: {
    NAME: string;
    URL: string;
    ICON: string;
  };
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
