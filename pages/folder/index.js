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

  return (
    <>
      <Header notFixed />
      <AddLink />
      <Search />
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
