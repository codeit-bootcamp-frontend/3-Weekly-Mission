import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './Form.module.css';

const cn = classNames.bind(styles);

interface FomrContainerProps extends ComponentPropsWithoutRef<'form'> {}

const Form = forwardRef<ElementRef<'form'>, FomrContainerProps>(
  ({ children, onSubmit, noValidate, method, ...rest }, ref) => {
    return (
      <form ref={ref} noValidate={noValidate} className={cn('form')} method={method} onSubmit={onSubmit} {...rest}>
        {children}
      </form>
    );
  },
);

Form.displayName = 'SignForm';

export default Form;
