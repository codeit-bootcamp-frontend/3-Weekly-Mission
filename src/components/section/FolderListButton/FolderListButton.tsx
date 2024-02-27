import { MouseEvent } from 'react';
import styles from './FolderListButton.module.css';
import { FolderInfo } from '@/pages/folder';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  folderName: string;
  onClickFolder: (folder: FolderInfo) => void;
  buttonName: string;
  id?: number;
}

export default function FolderListButton({
  folderName,
  onClickFolder,
  buttonName,
  id = undefined,
}: Props) {
  const className =
    folderName === buttonName ? cn('list-button', 'active') : cn('list-button');
  const onClick = (e: MouseEvent) => {
    if (e.currentTarget.textContent) {
      onClickFolder({ name: e.currentTarget.textContent, id });
    }
  };

  return (
    <button className={className} onClick={onClick}>
      {buttonName}
    </button>
  );
}
