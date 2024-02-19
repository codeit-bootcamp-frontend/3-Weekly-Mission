import { ComponentPropsWithRef } from 'react';

import styles from './NormalButton.module.css';

const btnWidth = {
  short: 'cta-short',
  long: 'cta-long',
};

type TNomalButtonProps = {
  children: React.ReactNode;
  width: keyof typeof btnWidth;
} & ComponentPropsWithRef<'button'>;

const NormalButton = ({ children, width, type, ...rest }: TNomalButtonProps) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type || 'submit'} className={`${styles.cta} ${styles[btnWidth[width]]}`} {...rest}>
      {children}
    </button>
  );
};

export default NormalButton;
