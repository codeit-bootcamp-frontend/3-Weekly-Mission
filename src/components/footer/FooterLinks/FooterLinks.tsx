import Sns from '../Sns/Sns';
import LinkString from '../LinkString/LinkString';

interface Props {
  target: string;
  rel: string;
}

export default function FooterLinks({ target, rel }: Props) {
  return (
    <>
      <LinkString className="footer-links" />
      <Sns className="sns" target={target} rel={rel} />
    </>
  );
}
