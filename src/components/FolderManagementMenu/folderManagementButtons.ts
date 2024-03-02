import { FolderManagementButton } from '@/types/Common';
import { MANAGEMENT_ACTIONS } from '@/constants/constants';

export const folderManagementButtons: FolderManagementButton[] = [
  {
    iconSource: '/images/share.svg',
    text: MANAGEMENT_ACTIONS.SHARE,
  },
  {
    iconSource: '/images/pen.svg',
    text: MANAGEMENT_ACTIONS.EDIT_NAME,
  },
  {
    iconSource: '/images/delete.svg',
    text: MANAGEMENT_ACTIONS.DELETE,
  },
];
