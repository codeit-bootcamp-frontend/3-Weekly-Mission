import './Footer.css'
import facebook from '../image/facebook.svg'
import twitter from '../image/twitter.svg'
import youtube from '../image/youtube.svg'
import instagram from '../image/instagram.svg'  


export default function Footer() {
  return (
    <footer>
    <div className="footer_box">
      <span className="write">©codeit - 2023</span>
      <ul className="footer_links">
        <li> 
          <a className="footer_link" href="../Privacy/privacy.html">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="footer_link" href="../FAQ/FAQ.html">
            FAQ
          </a>
        </li>
      </ul>
      <ul className="icon_list">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel='noopener noreferrer'>
            <img src={facebook} alt="facebook 홈페이지로 연결된 facebook 로고"/>
          </a>
        </li>
        <li>             
          <a href="https://twitter.com/" target="_blank" rel='noopener noreferrer'>
            <img src={twitter} alt="twitter 홈페이지로 연결된 twitter 로고"/>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel='noopener noreferrer'>
            <img src={youtube} alt="youtube 홈페이지로 연결된 youtube 로고"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel='noopener noreferrer'>
            <img src={instagram} alt="instagram 홈페이지로 연결된 instagram 로고"/>
          </a>
        </li>
      </ul>
    </div>
  </footer>
  )
}

