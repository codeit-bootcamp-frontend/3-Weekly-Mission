import { SOCIAL_LINKS } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';

const socialLinksArray = Object.values(SOCIAL_LINKS);

export const SocialLinks = () => {
  return (
    <>
      {socialLinksArray.map(({ NAME, URL, ICON }) => (
        <Link key={NAME} href={URL} target="_blank" rel="noreferrer">
          <Image width={20} height={20} src={ICON} alt={`${NAME} 아이콘`} />
        </Link>
      ))}
    </>
  );
};
