import { ElementRef, forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { AppendedCommonInputProps, CommonInputType } from '../common-input/CommonInput';
import InputWithLabelKit from './compound-kit';

type InputWithLabelProps = Omit<UseFormRegisterReturn, 'ref'> &
  PropsWithChildren<
    {
      id: InputHTMLAttributes<HTMLInputElement>['id'];
      placeholder: InputHTMLAttributes<HTMLInputElement>['placeholder'];
      autoComplete: InputHTMLAttributes<HTMLInputElement>['autoComplete'];
    } & AppendedCommonInputProps & {
        label: string;
      }
  >;

const InputWithLabel = forwardRef<ElementRef<CommonInputType>, InputWithLabelProps>(
  ({ children, label, id, ...rest }, ref) => {
    return (
      <InputWithLabelKit>
        <InputWithLabelKit.Box>
          <InputWithLabelKit.Label htmlFor={id}>{label}</InputWithLabelKit.Label>
          <InputWithLabelKit.InputWithErrorMsg ref={ref} id={id} {...rest}>
            {children}
          </InputWithLabelKit.InputWithErrorMsg>
        </InputWithLabelKit.Box>
      </InputWithLabelKit>
    );
  },
);

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;
