import Image from 'next/image';
import { ModalContainer } from '../../ModalContents/ModalContainer/ModalContainer';
import { ModalContentBox } from '../../ModalContents/ModalContentBox/ModalContentBox';
import { ModalContentTitle } from '../../ModalContents/ModalContentTitle/ModalContentTitle';
import { ModalDescription } from '../../ModalContents/ModalDescription/ModalDescription';
import styled from 'styled-components';

export const ShareModal = ({
  isOpen,
  title,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ModalContentBox
        header={
          <ModalHeader>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalDescription>{folderName}</ModalDescription>
          </ModalHeader>
        }
        content={
          <ModalContent>
            <Button onClick={onKakaoClick}>
              <KaKaoImageWrapper>
                <Image
                  src="/images/kakao.svg"
                  width={18}
                  height={18}
                  alt="카카오아이콘"
                />
              </KaKaoImageWrapper>
              <span>카카오톡</span>
            </Button>
            <Button onClick={onFacebookClick}>
              <FacebookImageWrapper>
                <Image
                  src="/images/facebook.svg"
                  width={18}
                  height={18}
                  alt="페북아이콘"
                />
              </FacebookImageWrapper>
              <span>페이스북</span>
            </Button>
            <Button onClick={onLinkCopyClick}>
              <LinkCopyImageWrapper>
                <Image
                  src="/images/link.svg"
                  width={18}
                  height={18}
                  alt="링크복사아이콘"
                />
              </LinkCopyImageWrapper>
              <span>링크 복사</span>
            </Button>
          </ModalContent>
        }
        onCloseClick={onCloseClick}
      />
    </ModalContainer>
  );
};

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 0.8rem;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3.2rem;
`;

const KaKaoImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  background-color: #fee500;
  border-radius: 100rem;
`;
const FacebookImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  background-color: #1877f2;
  border-radius: 100rem;
`;
const LinkCopyImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
  background-color: #e6e8ea;
  border-radius: 100rem;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  font-size: 1.3rem;
  line-height: 1.5rem;
`;
