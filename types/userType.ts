export interface NavbarUserInfo {
  [key: string]: string;
  authId: string;
  createdId: string;
  email: string;
  id: string;
  name: string;
  imageSource: string;
}

export type UserId = string | null;
