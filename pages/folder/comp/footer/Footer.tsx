import { MutableRefObject } from 'react';

import CommonFooter from '@components/ui/organisms/footer/CommonFooter';

type TFooterProps = {
  footerRef: MutableRefObject<HTMLElement | null>;
};

const Footer = ({ footerRef }: TFooterProps) => {
  return <CommonFooter ref={footerRef} />;
};

export default Footer;
