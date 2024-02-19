import Sns from './Sns';
import LinkString from './LinkSrting';

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