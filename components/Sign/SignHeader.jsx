import Link from "next/link";

export default function SignHeader({format}) {

  const text = {
    signin: {
      ask: '회원이 아니신가요?',
      link: '회원가입하기',
      href: '/sign-up'
    },
    signup: {
      ask: '이미 회원이신가요?',
      link: '로그인 하기',
      href: '/sign-in'
    }
  }

  return (
      <div className="header">
        <Link href="/">
          <div className="logo-area">
            <img src="/images/signin-logo.svg" alt="logo"/>
          </div>
        </Link>
        <div className="sign-text">
          <p className="ask-member">{text[format].ask}</p>
          <a className="signup-link" href={text[format].href}>{text[format].link}</a>
        </div>
      </div>
  );
}
