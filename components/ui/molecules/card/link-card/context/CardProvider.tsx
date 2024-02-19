import { createContext, PropsWithChildren, useContext } from 'react';

export type TCardProviderContext = {
  //   [key: string]: any;
  linkId: number;
  createdAt: string;
  description: string | null;
  imageSource?: string | null;
  url: string;
  folderId?: number | null;
  title: string | null;
};

type TCardProviderProps = PropsWithChildren<TCardProviderContext>;

const CardProviderContext = createContext<TCardProviderContext | undefined>(undefined);

const CardProvider = ({ children, ...rest }: TCardProviderProps) => {
  return <CardProviderContext.Provider value={rest}>{children}</CardProviderContext.Provider>;
};

export const useCardProvider = () => {
  const context = useContext(CardProviderContext);

  if (context === undefined) throw new Error('useCardProvider must be used within CardProvider');

  return context;
};

export default CardProvider;
