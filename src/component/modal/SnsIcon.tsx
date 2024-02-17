import React from "react";
import facebook_svg from "../../image/facebook.svg";
import link_svg from "../../image/link.svg";
import kakao_svg from "../../image/kakaotalk.svg";

export const SnsIcon = () => {
  return (
    <div className="sns_wrapper">
      <div className="sns_img_box">
        <div className="kakao_img_color style_wrapper">
          <img src={kakao_svg} alt="facebook" />
        </div>
        <span>카카오톡</span>
      </div>
      <div className="sns_img_box">
        <div className="facebook_img_color style_wrapper">
          <img src={facebook_svg} alt="facebook" />
        </div>
        <span>페이스북</span>
      </div>
      <div className="sns_img_box">
        <div className="link_img_color style_wrapper">
          <img src={link_svg} alt="facebook" />
        </div>
        <span>링크 복사</span>
      </div>
    </div>
  );
};
