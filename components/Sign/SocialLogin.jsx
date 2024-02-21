export default function SocialLogin({format}) {

  return (
      <section className="social-login-area">
        <p className="text">
          {format === 'signin' ? '소셜 로그인' : '다른 방식으로 가입하기'}
        </p>
        <div className="icon-box-container">
          <div className="icon-box">
            <a href="https://google.com">
              <img id="google-icon-box" src="/icons/signin-icon-google.svg" alt='iconBox'/>
              <img id="google-icon" src="/icons/signin-ic-google.png"
                   alt="icon"/>
            </a>
          </div>
          <div className="icon-box">
            <a href="https://kakaocorp.com/page">
              <img id="kakao-icon-box" src="/icons/signin-icon-kakao.svg" alt='iconBox'/>
              <img id="kakao-icon" src="/icons/signin-ic-kakao.png"
                   alt="icon"/>
            </a>
          </div>
        </div>
      </section>
  )
}
