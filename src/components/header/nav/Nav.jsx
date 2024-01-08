import { useEffect, useState } from "react";
import { getUserProfileById } from "../../../api/api";
import Container from "../../container/Container";
import styles from "./Nav.module.css";
import logoImg from "../../../assets/logo.svg";
import UserMenu from "../../userMenu/UserMenu";
import Button from "../../button/Button";
import { Link } from "react-router-dom";

function Nav() {
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getUserProfileById(1);

        if (!userProfile?.data) return;
        setUserProfile(userProfile.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="홈 버튼" />
        </Link>
        {userProfile ? (
          <UserMenu userProfile={userProfile} />
        ) : (
          <Button>로그인</Button>
        )}
      </Container>
    </div>
  );
}

export default Nav;
