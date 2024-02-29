import { ErrorOption, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export type CommonSignInputs = {
  email: string;
  password: string;
};

export type SigninInputs = CommonSignInputs;

export type SignupInputs = CommonSignInputs & {
  confirmPassword: string;
};

export type SigninInputsOptions<T extends FieldValues> = {
  email: RegisterOptions<T>;
  password: RegisterOptions<T>;
};

export type SignupInputsOptions<T extends FieldValues> = {
  email: RegisterOptions<T>;
  password: RegisterOptions<T>;
  confirmPassword: RegisterOptions<T>;
};

export type SubmitErrorMsg = {
  name: FieldPath<CommonSignInputs>;
} & ErrorOption & {
    shouldFocus?: boolean;
  };
