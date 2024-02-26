import { PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './FormContainer.module.css';

const cn = classNames.bind(styles);

interface FormContainerProps extends PropsWithChildren {}

const FormContainer = ({ children }: FormContainerProps) => {
  return <section className={cn('container')}>{children}</section>;
};

export default FormContainer;
