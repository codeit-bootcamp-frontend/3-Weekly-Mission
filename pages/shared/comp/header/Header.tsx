import CommonHeader from '@components/ui/organisms/header/CommonHeader';

import { useGetProfileData } from './hooks/useGetProfileData';

const Header = () => {
  const profileData = useGetProfileData();

  return <CommonHeader profileData={profileData} />;
};

export default Header;
