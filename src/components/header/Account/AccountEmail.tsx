import { ReactElement } from "react";

interface PropsAccountEmail {
  children: ReactElement
}

const AccountEmail = ({ children }: PropsAccountEmail) => {
  return <div className="accountEmail">{children}</div>;
}

export default AccountEmail;
