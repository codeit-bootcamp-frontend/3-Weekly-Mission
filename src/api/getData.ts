import { Folder, FolderLink, User } from '@/types/Common';
import { fetchData } from './fetchData';
import { ALL_CONTENTS_FOLDER } from '@/constants/constants';

export const getUser: () => Promise<User> = async () => {
  const result = await fetchData(`/users`);
  return result[0];
};

export const getUserInformation: (userId: number) => Promise<User> = async (
  userId,
) => {
  const result = await fetchData(`/user/${userId}`);
  return result[0];
};

export const getFolders: () => Promise<Folder[]> = async () => {
  const result = await fetchData('/folders');
  return result;
};

export const getFolderInformation: (
  folderId: string | number,
) => Promise<Folder> = async (folderId) => {
  const result = await fetchData(`/folders/${folderId}`);

  return result[0];
};

export const getSelectedFolder: (
  folderId: string | number,
) => Promise<Folder> = async (folderId) => {
  const result = await fetchData(`/folders/${folderId}`);
  if (!result) {
    throw new Error('No Response Data');
  }
  return result[0];
};

export const getFolderLinks: (
  folderId: string | number,
  accessToken?: string | undefined,
) => Promise<FolderLink[]> = async (folderId, accessToken) => {
  const result = await fetchData(
    folderId === ALL_CONTENTS_FOLDER.ID
      ? '/links'
      : `/folders/${folderId}/links`,
    'get',
    {},
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  return result;
};

export const getSharedFolderLinks: (
  folderId: string | number,
  accessToken?: string | undefined,
) => Promise<FolderLink[]> = async (folderId, accessToken) => {
  const result = await fetchData(
    folderId === ALL_CONTENTS_FOLDER.ID
      ? '/links'
      : `/folders/${folderId}/links`,
    'get',
    {},
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  return result;
};

export const getFolderOwner: (userId: number) => Promise<User> = async (
  userId,
) => {
  const result = await fetchData(`/users/${userId}`);
  return result[0];
};
