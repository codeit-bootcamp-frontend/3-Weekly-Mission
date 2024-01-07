import styled from 'styled-components';

const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const HeaderProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
const HeaderProfileEmail = styled.span`
  font-size: 14px;
  @media (max-width: 767px) {
    & {
      display: none;
    }
  }
`;

export default function NavProfile({ userEmail, userProfileImg }) {
  return (
    <HeaderProfile>
      <HeaderProfileImg src={userProfileImg} alt="profile" />
      <HeaderProfileEmail>{userEmail}</HeaderProfileEmail>
    </HeaderProfile>
  );
}
