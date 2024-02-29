import CommonHeader from '@components/ui/organisms/header/contents-page-header/CommonHeader';

import { useGetProfileData } from './hooks/useGetProfileData';

const Header = () => {
  const profileData = useGetProfileData();

  return <CommonHeader profileData={profileData} />;
};

export default Header;
