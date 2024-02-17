import useStickyState from '@/hooks/useStickyState';
import { Header } from '@/components/Header/index';
import { Favorites } from '@/components/Favorites/index';
import { SearchInput } from '@/components/SearchInput/index';
import { SharedCardList } from '@/components/SharedCardList';
import { Footer } from '@/components/Footer/index';

const Shared = () => {
  const [isSticky, setIsSticky] = useStickyState(true);

  return (
    <>
      <Header isSticky={!isSticky} setIsSticky={setIsSticky} />
      <Favorites />
      <div className="section">
        <SearchInput />
        <SharedCardList />
      </div>
      <Footer />
    </>
  );
};

export default Shared;
