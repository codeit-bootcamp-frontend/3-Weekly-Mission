import { MouseEvent } from 'react';
import styles from './FolderListButton.module.css';
import { FolderInfo } from '@/pages/folder';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cn = classNames.bind(styles);

interface Props {
  folderName: string;
  onClickFolder: (folder: FolderInfo) => void;
  buttonName: string;
  folderId?: number;
}

export default function FolderListButton({
  folderName,
  onClickFolder,
  buttonName,
  folderId = 0,
}: Props) {
  const className =
    folderName === buttonName ? cn('list-button', 'active') : cn('list-button');
  const onClick = (e: MouseEvent) => {
    if (e.currentTarget.textContent) {
      onClickFolder({ name: e.currentTarget.textContent, id: folderId });
    }
  };

  return (
    <Link href={folderId === 0 ? '/folder' : `/folder/${folderId}`}>
      <button className={className} onClick={onClick}>
        {buttonName}
      </button>
    </Link>
  );
}
