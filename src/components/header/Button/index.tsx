import { ReactElement } from "react";

interface PropsButton {
  children: ReactElement;
  onClick: () => void;
}

function Button({ children, onClick }: PropsButton) {
  return <div onClick={onClick}>{children}</div>;
}

export default Button;
