import { NavbarUserInfo } from "../../types/userType";
import Link from "next/link";
import Image from "next/image";
import { defaultProfileImg, logoImg } from "@/public/img";

interface Props {
  user?: NavbarUserInfo;
}

export default function Navbar({ user }: Props) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href={"/"}>
          <div className="logo">
            <Image
              style={{ objectFit: "cover" }}
              src={logoImg}
              fill
              alt="홈으로 이동하는 로고"
            />
          </div>
        </Link>

        {user ? (
          <NavProfile user={user} />
        ) : (
          <Link href={"/"}>
            <button type="button" className="login-btn">
              로그인
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

function NavProfile({ user }: Props) {
  const userEmail = user?.email;
  const source = user?.profileImageSource;

  return (
    <div className="userProfile">
      {source ? (
        <img className="profile-img" src={source} alt="프로필 사진" />
      ) : (
        <div className="profile-default-img">
          <Image
            width={10}
            height={10}
            src={defaultProfileImg}
            alt="프로필 사진"
          />
        </div>
      )}

      <span className="userName">{userEmail}</span>
    </div>
  );
}
