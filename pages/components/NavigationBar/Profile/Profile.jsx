import Image from 'next/image';
import styled from 'styled-components';

export default function Profile({ profile }) {
  return (
    <ProfileContainer>
      <ProfileImage
        src={profile.profileImageSource}
        width={28}
        height={28}
        alt="프로필 이미지"
      />
      <ProfileEmail>{profile.email}</ProfileEmail>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
`;

const ProfileImage = styled(Image)`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;

const ProfileEmail = styled.span`
  display: flex;
  font-size: 1.4rem;
  color: var(--gray100);

  @media (min-width: 768px) {
    display: inline;
  }
`;
