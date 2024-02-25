import { createContext, PropsWithChildren } from 'react';

const SignFormContext = createContext(undefined);

interface SignFormProviderProps extends PropsWithChildren {}

const SignFormProvider = ({ children }: SignFormProviderProps) => {
  return <SignFormContext.Provider value={undefined}>{children}</SignFormContext.Provider>;
};

export default SignFormProvider;
