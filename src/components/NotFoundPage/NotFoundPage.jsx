import styled from 'styled-components';

const NotFoundPageContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: pretendard;
  font-weight: 600;
`;

const NotFoundPage = () => {
  return <NotFoundPageContent>페이지를 찾을 수 없습니다</NotFoundPageContent>;
};

export default NotFoundPage;
