import { ComponentPropsWithoutRef } from 'react';

import classNames from 'classnames/bind';

import styles from './FormSubmitButton.module.css';

interface FormSubmitButtonProps extends ComponentPropsWithoutRef<'button'> {}

const cn = classNames.bind(styles);

const FormSubmitButton = ({ children, disabled, ...rest }: FormSubmitButtonProps) => {
  return (
    <button disabled={disabled} type='submit' className={cn('form-submit-btn')} {...rest}>
      {children}
    </button>
  );
};

export default FormSubmitButton;
