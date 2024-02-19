import { SVGAttributes } from 'react';

type MagifierProps = Pick<SVGAttributes<SVGElement>, 'width' | 'stroke' | 'height'>;

const Magifier = ({ stroke, width, height }: MagifierProps) => {
  return (
    // <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <svg width={width} height={height} viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.34442 14.3363C11.6539 14.3363 14.3368 11.6534 14.3368 8.34393C14.3368 5.03444 11.6539 2.35156 8.34442 2.35156C5.03493 2.35156 2.35205 5.03444 2.35205 8.34393C2.35205 11.6534 5.03493 14.3363 8.34442 14.3363Z'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5122 12.8232L14.8616 15.1665'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Magifier;
