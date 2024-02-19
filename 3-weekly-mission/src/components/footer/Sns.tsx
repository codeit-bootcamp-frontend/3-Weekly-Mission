import LinkLogo from './LinkLogo';
import styled from 'styled-components';

const SnsContainer = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

interface Props {
  className: string;
  target: string;
  rel: string;
}

export default function Sns({ className, target, rel }: Props) {
  return (
    <SnsContainer>
      <LinkLogo
        href="https://www.facebook.com/"
        logo="facebook"
        target={target}
        rel={rel}
      />
      <LinkLogo
        href="https://twitter.com/"
        logo="twitter"
        target={target}
        rel={rel}
      />
      <LinkLogo
        href="https://www.youtube.com/"
        logo="youtube"
        target={target}
        rel={rel}
      />
      <LinkLogo
        href="https://www.instagram.com/"
        logo="instagram"
        target={target}
        rel={rel}
      />
    </SnsContainer>
  );
}
