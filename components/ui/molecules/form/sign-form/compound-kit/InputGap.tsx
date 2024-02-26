import { PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './InputGap.module.css';

const cn = classNames.bind(styles);

type InputAreaProps = PropsWithChildren;

const GapBetweenInputs = ({ children }: InputAreaProps) => {
  return <div className={cn('input-gap')}>{children}</div>;
};

export default GapBetweenInputs;
