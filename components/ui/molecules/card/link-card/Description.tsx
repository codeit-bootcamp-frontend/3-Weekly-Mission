import { useCardProvider } from './context/CardProvider';

type TDescriptionProps = {
  children?: React.ReactNode;
  className?: string;
};

const Description = ({ children, ...rest }: TDescriptionProps) => {
  const { description } = useCardProvider();

  return <p {...rest}>{description || children}</p>;
};

export default Description;
