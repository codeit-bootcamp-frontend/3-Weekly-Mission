import { forwardRef } from 'react';

import styled from 'styled-components';

import { mediaBreakpoint } from '@style/media-breakpoint/mediaBreakpoint';
import { zIndex } from '@style/z-index/zIndex';

import AddLinkBar from '@components/ui/molecules/bar/add-link-bar/AddLinkBar';
import AddToFolderModal from '@components/ui/molecules/modal/add-to-folder-modal/AddToFolderModal';

import { useInput } from '@hooks/useInput';
import { useModal } from '@hooks/useModal';

import styles from './AddLink.module.css';

type TAddLinkProps = {
  shouldAddLinkLocateBottom?: boolean;
};
const AddLink = forwardRef<HTMLElement | null, TAddLinkProps>(({ shouldAddLinkLocateBottom }, ref) => {
  // todo : 폴더 이름들을 받아야 함.
  // 폴더 내부의 링크의 개수를 받아야 함.
  const [input, onChange, clearInput] = useInput('');
  const { openModal } = useModal();

  const handleModal = () => {
    openModal({
      Component: AddToFolderModal,
      props: { linkUrl: input, onClose: clearInput },
    });
  };

  return (
    <>
      <section ref={ref} className={styles['add-link-area']}>
        <AddLinkBar handleModal={handleModal} input={input} onChange={onChange} />
      </section>
      {shouldAddLinkLocateBottom && (
        <StAddLinkBottomArea>
          <AddLinkBar handleModal={handleModal} input={input} onChange={onChange} />
        </StAddLinkBottomArea>
      )}
    </>
  );
});

AddLink.displayName = 'AddLink';

export default AddLink;

const StAddLinkBottomArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 3.3rem 1.6rem 3.2rem;

  width: 100%;

  position: fixed;
  bottom: 0;
  z-index: ${zIndex.floatingElement};

  background: ${({ theme }) => theme.bg};
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.16);

  @media ${mediaBreakpoint.tablet} {
    padding-block: 2.4rem;
    padding-inline: 0;
  }
`;
