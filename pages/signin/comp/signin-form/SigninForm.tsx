import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { NextRouter } from 'next/router';
import styled from 'styled-components';

import FormSubmitButton from '@components/ui/atoms/button/form-submit-btn/FormSubmitButton';
import InputWithLabel from '@components/ui/atoms/input/input-with-label';
import SignForm from '@components/ui/molecules/form/sign-form';

import { signin } from '@api/sign/signin';

import { EMAIL_REGEX } from '@/constant/regex';
import { submitErrorMsg } from '@/constant/sign/submitErrorMsg';

type Inputs = {
  email: string;
  password: string;
};

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
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler = async (inputs: Inputs) => {
    try {
      const res = await signin({ email: inputs.email, password: inputs.password });

      if (!(res instanceof Error)) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        reset();
        router.push('/folder');
      }
    } catch {
      submitErrorMsg.forEach(({ name, message }) => {
        setError(name, {
          message,
        });
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }, [router]);

  return (
    <SignForm.FormContainer>
      <SignForm.Form noValidate method='post' onSubmit={handleSubmit(onSubmitHandler)}>
        <SignForm.InputGap>
          <InputWithLabel>
            <InputWithLabel.Box>
              <InputWithLabel.Label htmlFor='email'>이메일</InputWithLabel.Label>
              <InputWithLabel.InputWithErrorMsg
                id='email'
                type='email'
                isError={!!errors.email}
                placeholder='이메일을 입력해주세요.'
                {...register('email', {
                  pattern: {
                    value: EMAIL_REGEX,
                    message: '올바른 이메일 주소가 아닙니다.',
                  },
                  required: {
                    value: true,
                    message: '이메일을 입력해주세요.',
                  },
                })}
                autoComplete='email'
              >
                <StErrorMsg>{errors.email?.message}</StErrorMsg>
              </InputWithLabel.InputWithErrorMsg>
            </InputWithLabel.Box>
          </InputWithLabel>

          <InputWithLabel>
            <InputWithLabel.Box>
              <InputWithLabel.Label htmlFor='password'>비밀번호</InputWithLabel.Label>
              <InputWithLabel.InputWithErrorMsg
                id='password'
                type='password'
                isError={!!errors.password}
                placeholder='비밀번호를 입력해 주세요.'
                srcOnPasswordType='/images/icon/eye-off.svg'
                srcOnTextType='/images/icon/eye-on.svg'
                {...register('password', {
                  required: {
                    value: true,
                    message: '비밀번호를 입력해주세요.',
                  },
                })}
                autoComplete='current-password'
              >
                <StErrorMsg>{errors.password?.message}</StErrorMsg>
              </InputWithLabel.InputWithErrorMsg>
            </InputWithLabel.Box>
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

const StErrorMsg = styled.p`
  color: var(--Linkbrary-red, #ff5b56);

  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  margin: 0;
`;
