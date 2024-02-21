import Image from 'next/image';

import { useCardProvider } from './context/CardProvider';

type TCardImageProps = {
  alt: string;
  className?: string;
};

const CardImage = ({ alt, ...rest }: TCardImageProps) => {
  const { imageSource } = useCardProvider();
  const altImage = `/images/shared/no-image.svg`;

  return <Image priority fill alt={alt} src={imageSource || altImage} {...rest} />;
};

export default CardImage;
