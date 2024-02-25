import { ComponentPropsWithoutRef } from 'react';

import classNames from 'classnames/bind';

import styles from './InputLabel.module.css';

const cn = classNames.bind(styles);

type InputLabelProps = ComponentPropsWithoutRef<'label'>;

const InputLabel = ({ children, ...rest }: InputLabelProps) => {
  return (
    <label htmlFor='email' className={cn('form-input-label')} {...rest}>
      {children}
    </label>
  );
};

export default InputLabel;
