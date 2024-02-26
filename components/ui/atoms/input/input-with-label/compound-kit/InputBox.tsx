import { PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './InputBox.module.css';

const cn = classNames.bind(styles);

type InputBoxProps = PropsWithChildren;

const InputBox = ({ children }: InputBoxProps) => {
  return <div className={cn('form-input-box')}>{children}</div>;
};

export default InputBox;
