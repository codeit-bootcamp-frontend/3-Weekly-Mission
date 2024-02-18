import { useState } from 'react';
import Header from '@/components/header/Header';
import AddLink from '@/components/addLink/AddLink';
import Search from '../../components/searchBar/Search';
import UserSection from '../../components/userSection/UserSection';
import FloatingActionButton from '../../components/floatingActionButton/FloatingActionButton';
import ModalAddFolder from '../../components/modalAddFolder/ModalAddFolder';
import Footer from '../../components/footer/Footer';

const Folder = () => {
  const [showModalAddFolder, setShowModalAddFolder] = useState(false);

  function handleAddFolder() {
    setShowModalAddFolder(!showModalAddFolder);
  }

  function tempActivate() {
    alert('아직 미구현');
  }

  function search() {
    alert(
      '검색어를 입력하면 현재 폴더에 있는 링크들 중 “url”, “title”, “description”에 검색어가 포함된 링크들만 필터해서 보이게 해주세요. (어떻게 구현해야 할지 모르겠음, 일단 보류)',
    );
  }

  return (
    <>
      <Header notFixed />
      <AddLink />
      <Search result={search} />
      <UserSection />
      <FloatingActionButton onClick={handleAddFolder} />
      <Footer />
      {showModalAddFolder && (
        <ModalAddFolder
          handleClose={handleAddFolder}
          handleButton={tempActivate}
        />
      )}
    </>
  );
};

export default Folder;
