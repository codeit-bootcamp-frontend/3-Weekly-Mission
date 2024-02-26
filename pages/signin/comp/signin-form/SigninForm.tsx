import { useForm } from 'react-hook-form';

import { NextRouter } from 'next/router';
import styled from 'styled-components';

import FormSubmitButton from '@components/ui/atoms/button/form-submit-btn/FormSubmitButton';
import InputWithLabel from '@components/ui/atoms/input/input-with-label';
import SignForm from '@components/ui/molecules/form/sign-form';

import { signin } from '@api/sign/signin';

import { SIGN, SIGNIN_REGISTER_OPTIONS, SUBMIT_ERROR_MSG } from '@/constant/sign/sign';
import { SigninInputs } from '@/interface/sign/sign';

type SigninFormProps = {
  router: NextRouter;
};

const SigninForm = ({ router }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<SigninInputs>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler = async (inputs: SigninInputs) => {
    try {
      const res = await signin({ email: inputs.email, password: inputs.password });

      if (!(res instanceof Error) && typeof window !== 'undefined') {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        reset();
        router.push('/folder');
      }
    } catch {
      SUBMIT_ERROR_MSG.forEach(({ name, message }) => {
        setError(name, {
          message,
        });
      });
    }
  };

  return (
    <SignForm.FormContainer>
      <SignForm.Form noValidate method='post' onSubmit={handleSubmit(onSubmitHandler)}>
        <SignForm.InputGap>
          <InputWithLabel
            id='email'
            type='email'
            isError={!!errors.email}
            placeholder='이메일을 입력해주세요.'
            autoComplete='email'
            label='이메일'
            {...register(SIGN.EMAIL, SIGNIN_REGISTER_OPTIONS.email)}
          >
            <StErrorMsg>{errors.email?.message}</StErrorMsg>
          </InputWithLabel>

          <InputWithLabel
            id='password'
            type='password'
            isError={!!errors.password}
            placeholder='비밀번호를 입력해 주세요.'
            srcOnPasswordType='/images/icon/eye-off.svg'
            srcOnTextType='/images/icon/eye-on.svg'
            autoComplete='current-password'
            label='비밀번호'
            {...register('password', SIGNIN_REGISTER_OPTIONS.password)}
          >
            <StErrorMsg>{errors.password?.message}</StErrorMsg>
          </InputWithLabel>
        </SignForm.InputGap>

        <FormSubmitButton disabled={isSubmitting} type='submit'>
          로그인
        </FormSubmitButton>
      </SignForm.Form>

      <SignForm.SocialMediaLogin />
    </SignForm.FormContainer>
  );
};

export default SigninForm;

export const StErrorMsg = styled.p`
  color: var(--Linkbrary-red, #ff5b56);

  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  margin: 0;
`;
