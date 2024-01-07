import facebookImage from '../img/akar-icons_facebook-fill.svg';
import twitterImage from '../img/akar-icons_twitter-fill.svg';
import youtubeImage from '../img/akar-icons_youtube-fill.svg'
import instagramImage from '../img/ant-design_instagram-filled.svg';
import FooterSns from './FooterSns.js';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
    <div className="content">
        <div className="box">
          <div className="item01">@codeit - 2023</div>
          <div className="item02">
          <div>Privacy Policy</div>
          <div>FAQ</div>
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
  )
}

export default Footer;