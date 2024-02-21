import styled from 'styled-components';

import SocialMediaIcon, { TSocialMediaIcon } from '@components/ui/atoms/icon/social-media-icon/SocialMediaIcon';

type TSocialMediaBoxProps = {
  socialMediaIcons: TSocialMediaIcon[];
};

const SocialMediaBox = ({ socialMediaIcons }: TSocialMediaBoxProps) => {
  return (
    <StSocialMediaBoxWrapper>
      {socialMediaIcons.map((icon) => (
        <SocialMediaIcon key={icon.href} {...icon} />
      ))}
    </StSocialMediaBoxWrapper>
  );
};

export default SocialMediaBox;

const StSocialMediaBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.2rem;

  grid-area: sm;

  /* ul reset */
  padding: 0;
  list-style-type: none;
`;
