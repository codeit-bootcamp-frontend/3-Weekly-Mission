import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
  type: string;
}

export const SocialSign = ({ type }: Props) => {
  return (
    <article className={styles['social-sign']}>
      {type === 'signin' ? <p>소셜 로그인</p> : <p>다른 방식으로 가입하기</p>}
      <div className={styles['social-sign__icons']}>
        <Link href="https://www.google.com">
          <Image
            width={42}
            height={42}
            src="/images/google.png"
            alt="구글 아이콘"
          />
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <Image
            width={42}
            height={42}
            src="/images/kakaotalk.png"
            alt="카카오톡 아이콘"
          />
        </Link>
      </div>
    </article>
  );
};
