import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

type TPotalProps = PropsWithChildren;

const Portal = ({ children }: TPotalProps) => {
  return ReactDOM.createPortal(children, document.getElementById('portal')!);
};

const PortalContainer = ({ children }: TPotalProps) => {
  return <Portal>{children}</Portal>;
};

export default PortalContainer;
