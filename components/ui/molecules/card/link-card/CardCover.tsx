import { useCardProvider } from './context/CardProvider';

type TSlotProps = {
  children: React.ReactNode;
  url: string | undefined;
};

const Slot = ({ children, url, ...rest }: TSlotProps) => {
  return (
    <a rel='noopener noreferrer' {...rest} target='_blank' href={url}>
      {children}
    </a>
  );
};

type TCardCoverProps = {
  children: React.ReactNode;
  asAnchor?: boolean;
  className?: string;
};

const CardCover = ({ children, asAnchor = false, ...rest }: TCardCoverProps) => {
  const { url } = useCardProvider();
  const Comp = asAnchor ? Slot : 'section';

  return (
    <Comp {...rest} url={Comp === Slot ? url : undefined}>
      {children}
    </Comp>
  );
};

export default CardCover;
