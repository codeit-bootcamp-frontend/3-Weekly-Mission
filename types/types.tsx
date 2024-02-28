import { UserFolder, UserLink } from "../api/api";

export interface LinkSearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface FolderListProps {
  onSelectFolder: (folder: UserFolder) => void;
  selectedFolder: UserFolder;
}

export interface FolderNameProps {
  selectedFolder: UserFolder;
}

export interface FolderContentCardProps {
  items: UserLink[] | undefined;
}

export interface CardProps {
  item: UserLink;
}

export interface ModalProps {
  closeModal: React.MouseEventHandler<HTMLImageElement | HTMLButtonElement>;
  selectedModalName?: string;
  selectedModalItem?: UserLink;
}
