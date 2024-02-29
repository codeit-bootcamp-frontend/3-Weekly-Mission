import { FieldValues, useForm, UseFormProps } from 'react-hook-form';

interface UseFormOnSubmitProps<T extends FieldValues> extends UseFormProps<T> {
  onSubmit: (inputs: T) => void;
}

export const useFormOnSubmit = <T extends FieldValues>(useFormProps?: UseFormOnSubmitProps<T>) => {
  const onSubmitHandler = async (inputs: T) => {
    if (typeof useFormProps?.onSubmit === 'function') {
      useFormProps.onSubmit(inputs);
    }
  };

  return {
    ...useForm<T>(useFormProps),
    handleSubmit: useForm<T>(useFormProps).handleSubmit(onSubmitHandler),
  };
};
