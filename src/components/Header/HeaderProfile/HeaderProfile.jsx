import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderProfileContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 6px;
  }
  div {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 14px;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const HeaderLoginInBtn = styled.button`
  width: 128px;
  border-radius: 8px;
  padding: 16px 20px;
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
`;

const HeaderProfile = ({ login, userData }) => {
  return (
    <div>
      {login ? (
        <HeaderProfileContainer>
          <img src={userData.image_source} alt="프로필 이미지" />
          <div>{userData.email}</div>
        </HeaderProfileContainer>
      ) : (
        <HeaderLoginInBtn type="button">
          <Link to="/signin">로그인</Link>
        </HeaderLoginInBtn>
      )}
    </div>
  );
};

export default HeaderProfile;
