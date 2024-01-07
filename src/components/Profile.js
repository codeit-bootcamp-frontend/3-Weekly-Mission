import "./Profile.css";

const Profile = function () {
  return (
    <div className="Profile">
      <div className="box">
        <div className="personal">
          <img src="/img/codeit_logo.svg" alt="profile사진" />
          <span>@코드잇</span>
        </div>
        <span className="bookmark">즐겨찾기</span>
      </div>
    </div>
  );
};

export default Profile;
