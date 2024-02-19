import { createContext, PropsWithChildren, RefObject, useContext } from 'react';

import styled from 'styled-components';

const SelectMenuContext = createContext(undefined);

type TSelectMenuProviderProps = PropsWithChildren<{ modalRef?: RefObject<HTMLDivElement> }>;

const SelectMenuProvider = ({ children, modalRef }: TSelectMenuProviderProps) => {
  return (
    <SelectMenuContext.Provider value={undefined}>
      <StSelectMenuContextWrapper ref={modalRef}>{children}</StSelectMenuContextWrapper>
    </SelectMenuContext.Provider>
  );
};

export const useSelectMenuProvider = () => {
  const context = useContext(SelectMenuContext);

  if (context === undefined) throw new Error('useSelectMenuProvider must be used within a SelectMenuProvider');

  return context;
};

export default SelectMenuProvider;

const StSelectMenuContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 10rem;

  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  position: absolute;
  top: 3rem;
  right: -4rem;
`;
