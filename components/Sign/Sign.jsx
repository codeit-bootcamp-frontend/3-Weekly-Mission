import * as S from './Sign.style';
import SignHeader from "./SignHeader";
import SocialLogin from "./SocialLogin";
import SignForm from "./SignForm";

export default function Sign({format}) {

  return (
      <S.BackgroundWrapper>
        <S.Sign>
          <section className="form-login-area">
            <SignHeader format={format}/>
            <SignForm format={format}/>
          </section>
          <SocialLogin format={format}/>
        </S.Sign>
      </S.BackgroundWrapper>
  );
}
