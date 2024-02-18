import { Folder, FolderItem, FolderSample, User } from '@/types/Common';
import { API } from '@/utils/constants';

export const getUserSample: () => Promise<User> = async () => {
  try {
    const response = await fetch(API.USER_SAMPLE);
    const result = await response.json();

    const userSampleData = {
      ...result,
      image_source: result.profileImageSource
        ? result.profileImageSource
        : null,
    };

    return userSampleData;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

export const getFolderSample: () => Promise<FolderSample> = async () => {
  try {
    const response = await fetch(API.FOLDER_SAMPLE);
    const result = await response.json();

    const formattedData: FolderItem[] = result.folder.links.map(
      (link: FolderItem) => ({
        ...link,
        created_at: link.createdAt,
        image_source: link.imageSource,
      }),
    );

    const folderSampleData: FolderSample = {
      ...result.folder,
      links: formattedData,
    };

    return folderSampleData;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

export const getUser: () => Promise<User> = async () => {
  try {
    const response = await fetch(API.USER);
    const result = await response.json();
    const userData = result?.data[0];
    return userData;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

export const getFolder: () => Promise<Folder[]> = async () => {
  try {
    const response = await fetch(API.USER_FOLDERS);
    const result = await response.json();
    const folderData = result?.data;
    return folderData;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};

export const getFolderItem: (
  folderId: number | string,
) => Promise<FolderItem[]> = async folderId => {
  try {
    const response = await fetch(
      folderId === 'all'
        ? API.USER_LINKS
        : `${API.USER_LINKS}?folderId=${folderId}`,
    );
    const result = await response.json();
    const folderItemData = result?.data;
    return folderItemData;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};
