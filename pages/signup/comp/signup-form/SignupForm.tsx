import { useForm } from 'react-hook-form';

import { NextRouter } from 'next/router';

import FormSubmitButton from '@components/ui/atoms/button/form-submit-btn/FormSubmitButton';
import InputWithLabel from '@components/ui/atoms/input/input-with-label';
import SignForm from '@components/ui/molecules/form/sign-form';
import { StErrorMsg } from '@pages/signin/comp/signin-form/SigninForm';

import { checkEmailDuplication } from '@api/sign/checkEmailDuplication';
import { signin } from '@api/sign/signin';

import { EMAIL_REGEX } from '@/constant/regex';
import { SIGN, SIGNUP_REGISTER_OPTIONS, SUBMIT_ERROR_MSG } from '@/constant/sign/sign';
import { SignupInputs } from '@/interface/sign/sign';

type SignupFormProps = {
  router: NextRouter;
};

const SignupForm = ({ router }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    getValues,
  } = useForm<SignupInputs>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmitHandler = async (inputs: SignupInputs) => {
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
            id={SIGN.EMAIL}
            type='email'
            isError={!!errors.email}
            placeholder='이메일을 입력해주세요.'
            autoComplete='email'
            label='이메일'
            {...register('email', {
              ...SIGNUP_REGISTER_OPTIONS.email,
              onBlur: async () => {
                if (!EMAIL_REGEX.test(getValues().email)) return;

                try {
                  await checkEmailDuplication(getValues().email);
                } catch {
                  setError(SIGN.EMAIL, {
                    message: '이미 존재하는 이메일입니다.',
                  });
                }
              },
            })}
          >
            <StErrorMsg>{errors.email?.message}</StErrorMsg>
          </InputWithLabel>

          <InputWithLabel
            id={SIGN.PASSWORD}
            type='password'
            isError={!!errors.password}
            placeholder='비밀번호를 입력해 주세요.'
            srcOnPasswordType='/images/icon/eye-off.svg'
            srcOnTextType='/images/icon/eye-on.svg'
            autoComplete='current-password'
            label='비밀번호'
            {...register(SIGN.PASSWORD, SIGNUP_REGISTER_OPTIONS.password)}
          >
            <StErrorMsg>{errors.password?.message}</StErrorMsg>
          </InputWithLabel>

          <InputWithLabel
            id={SIGN.CONFIRM_PASSWORD}
            type='password'
            isError={!!errors.confirmPassword}
            placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
            srcOnPasswordType='/images/icon/eye-off.svg'
            srcOnTextType='/images/icon/eye-on.svg'
            autoComplete='current-password'
            label='비밀번호 확인'
            {...register(SIGN.CONFIRM_PASSWORD, {
              ...SIGNUP_REGISTER_OPTIONS.confirmPassword,
              validate: (value) => value === getValues().password || '비밀번호가 일치하지 않습니다.',
            })}
          >
            <StErrorMsg>{errors.password?.message}</StErrorMsg>
          </InputWithLabel>
        </SignForm.InputGap>

        <FormSubmitButton disabled={isSubmitting} type='submit'>
          회원가입
        </FormSubmitButton>
      </SignForm.Form>

      <SignForm.SocialMediaLogin />
    </SignForm.FormContainer>
  );
};

export default SignupForm;
