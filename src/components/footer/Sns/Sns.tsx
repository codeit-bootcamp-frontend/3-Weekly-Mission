import LinkLogo from '../LinkLogo/LinkLogot';
import styles from './Sns.module.css';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Props {
  className: string;
  target: string;
  rel: string;
}

export default function Sns({ className, target, rel }: Props) {
  return (
    <div className={cn(className)}>
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
    </div>
  );
}
