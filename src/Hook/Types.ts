export interface UserLinkType {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  url: string | null;
  title: string;
  description: string | null;
  image_source: string;
  folderId: number | null;
}

export interface UserIdType {
  id: number;
  created_at: string;
  image_source: string;
  name: string;
  email: string;
  auth_id: string;
}

export interface UserFolderType {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { 
    count: number 
  };
}

export interface UserProfileType {
  folder:{
    id: number;
    name: string;
      owner:{
        id:number;
        name:string;
        profileImageSource:string;
      }
      links: [
        {
          id: string;
          createdAt: string;
          url: string;
          title: string;
          description: string;
          imageSource:string;
        }
      ]
      count: number; 
  }
}


export interface ModalType {
  modalOpen: boolean;
  headerText: string;
  buttonText?: string | null;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  icon?: boolean | null;
  type: string;
  placeholder?: string | null;
  folderName?: string | null;
  close: React.Dispatch<React.SetStateAction<boolean>>;
}
//React.Dispatch<React.SetStateAction<boolean>> -> setState의 타입?

export type OverlayStyle = {
  backgroundColor: string;
  width: string;
  height: string;
  zIndex: string;
};

export type ContentStyle = {
  width: string;
  height: string;
  padding: string;
  zIndex: string;
  top: string;
  left: string;
  transform: string;
  borderRadius: string;
  border: string;
  backgroundColor: string;
  position: string;
};

export type onClickEventType = (e: React.MouseEvent<HTMLElement>) => void;
// 이벤트 객체의 타입을 모듈화해서 사용하는건 굳이 필요 없을것같아요 
