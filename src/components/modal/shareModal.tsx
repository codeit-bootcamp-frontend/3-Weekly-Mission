import "components/modal/shareModal.css";
import KAKAO from "assets/kakao.svg";
import FACEBOOK from "assets/Facebook-copy.svg";
import COPYLINK from "assets/copylink.svg";

interface PropsShare {
  sns: string;
  src: string;
  text: string;
}

function Share({ sns, src, text }: PropsShare) {
  return (
    <div className="share">
      <div className="link">
        <div className={sns}>
          <div className="dumy">
            <img src={src} alt="" />
          </div>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default function ShareModal() {
  return (
    <div className="ShareModal">
      <div className="titles">
        <div className="title">폴더공유</div>
        <div className="subTitle">폴더명</div>
      </div>
      <div className="share">
        <Share sns="kakao" src={KAKAO} text="kakao" />
        <Share sns="facebook" src={FACEBOOK} text="facebook" />
        <Share sns="copy" src={COPYLINK} text="copylink" />
      </div>
    </div>
  );
}
