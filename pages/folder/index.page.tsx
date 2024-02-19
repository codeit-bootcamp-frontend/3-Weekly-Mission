import { useMemo, useRef } from 'react';

import { useTargetVisibleState } from '@hooks/useTargetVisibleState';

import AddLink from './comp/add-link/AddLink';
import Article from './comp/article/Article';
import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';

const FolderPage = <T extends HTMLElement>() => {
  const addLinkRef = useRef<T | null>(null);
  const footerRef = useRef<T | null>(null);

  const isAddLinkVisible = useTargetVisibleState(addLinkRef, ({ target }) => {
    if (target && target.clientHeight <= document.documentElement.scrollTop) {
      return false;
    }

    return true;
  });

  const isFooterVisible = useTargetVisibleState(footerRef);

  const shouldAddLinkLocateBottom = useMemo(
    () => !isAddLinkVisible && !isFooterVisible,
    [isAddLinkVisible, isFooterVisible],
  );

  return (
    <>
      <Header />
      <AddLink ref={addLinkRef} shouldAddLinkLocateBottom={shouldAddLinkLocateBottom} />
      <Article />
      <Footer footerRef={footerRef} />
    </>
  );
};

export default FolderPage;
