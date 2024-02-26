import { createContext, PropsWithChildren } from 'react';

const InputWithLabelContext = createContext(undefined);

type InputWithLabelProviderProps = PropsWithChildren;

const InputWithLabelProvider = ({ children }: InputWithLabelProviderProps) => {
  return <InputWithLabelContext.Provider value={undefined}>{children}</InputWithLabelContext.Provider>;
};

export default InputWithLabelProvider;
