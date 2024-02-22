import Input from '@/src/components/Input/Input';
import styles from '@/styles/signup.module.css';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

const cn = classNames.bind(styles);

export default function signup() {
  return (
    <div className={cn('background')}>
      <div className={cn('container')}>
        <article className={cn('article-signup')}>
          <header className={cn('header')}>
            <Link href="/">
              <div className={cn('logo')}>
                <Image
                  fill
                  src="/images/logo.svg"
                  alt="Linkbrary 로고"
                  priority={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className={cn('goto-signin')}>
              <span>이미 회원이신가요?</span>
              <Link href="/signin" className={cn('link')}>
                로그인 하기
              </Link>
            </div>
          </header>
          <section className={cn('section')}>
            <div className={cn('input')}>
              <label className={cn('label')}>이메일</label>
              <Input
                type="email"
                check={/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]{2,}/}
                errorMessage={
                  isSubmitError
                    ? '이메일을 확인해 주세요.'
                    : '올바른 이메일 주소가 아닙니다.'
                }
                placeholder="이메일을 입력해 주세요."
                isSubmitError={isSubmitError}
                setIsSubmitError={setIsSubmitError}
                onChange={setEmail}
                onKeydown={onKeydown}
              />
            </div>
            <div className={cn('input')}>
              <label className={cn('label')}>비밀번호</label>
              <Input
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                errorMessage="비밀번호를 확인해 주세요."
                isSubmitError={isSubmitError}
                setIsSubmitError={setIsSubmitError}
                onChange={setPassword}
                onKeydown={onKeydown}
              />
            </div>
          </section>
          <button
            type="button"
            className={cn('signin-button')}
            onClick={onClickSignin}
          >
            로그인
          </button>
        </article>
        <footer className={cn('footer')}>
          <span>소셜 로그인</span>
          <div className={cn('social-icons')}>
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
        </footer>
      </div>
    </div>
  );
}
