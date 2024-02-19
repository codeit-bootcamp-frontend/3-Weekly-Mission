import classNames from 'classnames/bind';

import styles from './AnchorButton.module.css';

const cn = classNames.bind(styles);

const btnWidth = {
  short: 'cta-short',
  long: 'cta-long',
};

type TAnchorButton = {
  children: React.ReactNode;
  width?: keyof typeof btnWidth;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const AnchorButton = ({ children, width = 'short', href, ...rest }: TAnchorButton) => {
  return (
    <a className={cn('cta', `${btnWidth[width]}`)} href={href} {...rest}>
      {children}
    </a>
  );
};

export default AnchorButton;
