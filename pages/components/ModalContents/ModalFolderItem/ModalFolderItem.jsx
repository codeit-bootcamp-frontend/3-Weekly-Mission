import Image from 'next/image';

export const ModalFolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <span>{folderName}</span>
      <span>{linkCount}개 링크</span>
      {isSelected && (
        <Image
          src="/images/check.svg"
          width={14}
          height={14}
          alt="체크아이콘"
        />
      )}
    </button>
  );
};
