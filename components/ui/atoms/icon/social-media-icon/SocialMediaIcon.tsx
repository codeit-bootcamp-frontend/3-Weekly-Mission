import Image from 'next/image';

export type TSocialMediaIcon = {
  href: string;
  imgSrc: string;
  imgAlt: string;
};

const SocialMediaIcon = ({ href, imgAlt, imgSrc }: TSocialMediaIcon) => {
  return (
    <li>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <Image width={20} height={20} alt={imgAlt} src={imgSrc} />
      </a>
    </li>
  );
};

export default SocialMediaIcon;
