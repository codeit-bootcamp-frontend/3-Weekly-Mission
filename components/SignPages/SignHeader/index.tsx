import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

interface Props {
  type: string;
}

export const SignHeader = ({ type = 'signin' }: Props) => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <Image
          width={211}
          height={38}
          src="./images/logo.svg"
          alt="홈으로 연결된 Linkbrary 로고"
        />
      </Link>
      <p className={styles['header__text']}>
        {type === 'signin' ? (
          <>
            <span>회원이 아니신가요? </span>
            <Link className={styles['header__sign-link']} href="/signup">
              회원 가입하기
            </Link>
          </>
        ) : (
          <>
            <span>이미 회원이신가요? </span>
            <Link className={styles['header__sign-link']} href="/signin">
              로그인 하기
            </Link>
          </>
        )}
      </p>
    </div>
  );
};
