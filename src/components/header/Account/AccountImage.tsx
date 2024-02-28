interface PropsAccountImgae {
  value: string;
}

const AccountImage = ({ value }: PropsAccountImgae) => {
  return (
    <div className="accountImage">
      <img src={value} alt={value} />
    </div>
  );
}
export default AccountImage;
