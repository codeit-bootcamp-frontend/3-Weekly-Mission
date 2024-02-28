import facebookImage from "assets/akar-icons_facebook-fill.svg";
import twitterImage from "assets/akar-icons_twitter-fill.svg";
import youtubeImage from "assets/akar-icons_youtube-fill.svg";
import instagramImage from "assets/ant-design_instagram-filled.svg";
import FooterSns from "components/footer/FooterSns";
import "components/footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="box">
          <span className="item01">@codeit - 2023</span>
          <div className="item02">
            <span>Privacy Policy</span>
            <span>FAQ</span>
          </div>
          <div className="item03">
            <FooterSns value={facebookImage} />
            <FooterSns value={twitterImage} />
            <FooterSns value={youtubeImage} />
            <FooterSns value={instagramImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
