import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const LinkbraryLogo = () => {
  return (
    <Link href='/'>
      <StLogo
        priority
        width={210}
        height={38}
        alt='Linkbrary logo linked to home'
        src='/images/logo/landing-logo.svg'
      />
    </Link>
  );
};

export default LinkbraryLogo;

const StLogo = styled(Image)`
  width: 21.0583rem;
  height: 3.8rem;
`;
