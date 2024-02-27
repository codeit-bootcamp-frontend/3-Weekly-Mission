import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { AddLinkModal } from '../Modal/AddLinkModal/AddLinkModal';

export const LinkForm = ({ folders }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <LinkFormContainer>
      <FormWrapper onSubmit={handleOnSubmit}>
        <InputBox>
          <InputBoxIcon
            src="/images/link.svg"
            width={20}
            height={20}
            alt="링크아이콘"
          />
          <input type="text" placeholder="링크를 추가해 보세요" />
        </InputBox>
        <InputButton>추가하기</InputButton>
      </FormWrapper>
      <AddLinkModal
        isOpen={isModalOpen}
        title="폴더에 추가"
        buttonText="추가하기"
        folders={folders}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onkeyDown={handleKeyDown}
      />
    </LinkFormContainer>
  );
};

const LinkFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.4rem 3.2rem 4rem;
  background-color: var(--light-blue);

  @media (min-width: 768px) {
    padding: 6rem 3.2rem 9rem;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 80rem;
  height: 5.3rem;
  column-gap: 1rem;
  padding: 0 1rem;
  border: 0.1rem solid var(--primary);
  border-radius: 1.5rem;
  background-color: white;

  @media (min-width: 768px) {
    height: 6.9rem;
    column-gap: 2rem;
    padding: 0 2rem;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 0.8rem;

  @media (min-width: 768px) {
    column-gap: 1.2rem;
  }

  & > input {
    width: 100%;
    height: 5.1rem;
    font-size: 1.4rem;
    line-height: 150%;

    @media (min-width: 768px) {
      height: 6.6rem;
      font-size: 1.6rem;

      &::placeholder {
        color: var(--gray60);
      }
    }
  }
`;

const InputBoxIcon = styled(Image)`
  width: 1.6rem;
  height: 1.6rem;

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

const InputButton = styled.button`
  width: 8rem;
  height: 3.7rem;
  font-size: 1.4rem;
  color: white;
  border-radius: 0.8rem;
  background: linear-gradient(91deg, var(--primary) 0.12%, #6ae3fe 101.84%);
`;
