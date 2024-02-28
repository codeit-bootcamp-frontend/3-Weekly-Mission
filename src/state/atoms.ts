import { atom } from 'recoil';

export const folderInfoState = atom({
  key: 'folderInfoState',
  default: {
    name: '전체',
    id: 0,
  },
});

export const userState = atom({
  key: 'userState',
  default: {
    id: 0,
    created_at: '',
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  },
});
