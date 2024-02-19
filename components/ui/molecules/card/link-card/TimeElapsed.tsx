import { getTimeDiff } from '@utils/time/getTimeDiff';

import { useCardProvider } from './context/CardProvider';

type TTimeElapsedProps = {
  children?: React.ReactNode;
  className?: string;
};

const TimeElapsed = ({ children, ...rest }: TTimeElapsedProps) => {
  const { createdAt } = useCardProvider();
  const timeDiffMsg = getTimeDiff(createdAt);

  return <span {...rest}>{timeDiffMsg || children}</span>;
};

export default TimeElapsed;
