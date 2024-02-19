import { User } from './Nav';

interface Props {
  user: User;
}

/* 스타일드 컴포넌트 스타일 추가 */
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--Linkbrary-gray100);
  font-size: 14px;
`;

const ProfileImage = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

const Email = styled.span`
  color: var(--Linkbrary-gray100, #373740);
  font-size: 1.4rem;
`;

export default function Profile({ user }: Props) {
  return (
    <UserContainer>
      <ProfileImage
        width={28}
        height={28}
        src={user.profileImageSource || user['image_source']}
        alt="프로필 사진"
      />
      <Email>{user.email}</Email>
    </UserContainer>
  );
}
