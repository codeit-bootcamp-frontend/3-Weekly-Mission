import styled from 'styled-components';

const FolderTitleContainer = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  div {
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.2px;
  }

  @media (max-width: 1123px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
`;

const FolderToolbar = styled.div`
  display: flex;
  gap: 16px;
  button {
    display: flex;
    align-items: center;
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    img {
      margin-right: 4px;
    }
  }
`;

const FolderTitle = ({ currentFolder }) => {
  return (
    <FolderTitleContainer>
      <div>{currentFolder}</div>
      {currentFolder !== '전체' ? (
        <FolderToolbar>
          <button type="button">
            <img src={`${process.env.PUBLIC_URL}/images/share.svg`} alt="폴더 도구 모음 공유 버튼" />
            <span>공유</span>
          </button>
          <button type="button">
            <img src={`${process.env.PUBLIC_URL}/images/pen.svg`} alt="폴더 도구 모음 수정 버튼" />
            <span>이름 변경</span>
          </button>
          <button type="button">
            <img src={`${process.env.PUBLIC_URL}/images/trash_can.svg`} alt="폴더 도구 모음 삭제 버튼" />
            <span>삭제</span>
          </button>
        </FolderToolbar>
      ) : null}
    </FolderTitleContainer>
  );
};

export default FolderTitle;
