import Link from 'next/link';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
`;

const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;


interface Props {
  className: string;
}

export default function LinkString({ className }: Props) {
  return (
    <div>
      <Link href="privacy.html">
        Privacy Policy
      </Link>
      <Link href="faq.html">
        FAQ
      </Link>
    </div>
  );
}