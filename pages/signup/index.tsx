import styles from '@/styles/signin.module.css'
import React from 'react'
import { NextPage } from 'next'
import SignHeader from '@/components/SignHeader'
import { LoginForm } from '@/types/sign'
import useSignUpForm from '@/hooks/useSignUpForm'
import useTogglePassword from '@/hooks/useTogglePassword'
import Input from '@/components/atomicComponents/Input'
import { useRouter } from 'next/router'
import { emailPattern, passwordPattern } from '@/utils/regexPatterns'
import { useCheckDuplicateEmail } from '@/libs/client/useCheckDuplicateEmail'
import { withAuth } from '@/contexts/AuthProvider'
import {
  emailAlreadyInUseMessage,
  emailFormatInvalid,
  emailIsEmpty,
  passwordCheckIsEmpty,
  passwordFormatInvalid,
  passwordIsEmpty,
  passwordIsNotMach,
  serverError,
} from '@/constants/errorMessage'
import { useSignUpUser } from '@/libs/client/useSignUpUser'

const SignUp: NextPage = () => {
  const { register, handleSubmit, errors, password, email } = useSignUpForm()
  const { showPassword, toggleShowPassword } = useTogglePassword()

  const router = useRouter()

  const onValid = async (data: LoginForm) => {
    try {
      useSignUpUser(data)
      await router.push('/folder')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.main}>
      <SignHeader />
      <div className={styles.sign_box}>
        <form
          id="sign_form"
          className={styles.signForm}
          onSubmit={handleSubmit(onValid)}
        >
          <div className={styles.sign_box_inputs}>
            <Input
              label="이메일"
              type="text"
              name="email"
              register={register}
              validationRules={{
                required: emailIsEmpty,
                pattern: {
                  value: emailPattern,
                  message: emailFormatInvalid,
                },
                validate: {
                  asyncValidation: async (value: string) => {
                    const response = await useCheckDuplicateEmail(value)
                    if (response === true) {
                      return true
                    }
                    if (response.status === 409) {
                      return emailAlreadyInUseMessage
                    }
                    if (response.status === 500) {
                      return serverError
                    }
                    return `${response.status}: ${response.message}`
                  },
                },
              }}
              error={errors.email?.message}
            />
            <Input
              label="비밀번호"
              name="password"
              type={showPassword.password ? 'text' : 'password'}
              register={register}
              validationRules={{
                required: passwordIsEmpty,
                pattern: {
                  value: passwordPattern,
                  message: passwordFormatInvalid,
                },
              }}
              error={errors.password?.message}
              toggleShowPassword={() => toggleShowPassword('password')}
              showPasswordButton={true}
            />
            <Input
              label="비밀번호 확인"
              type={showPassword.passwordCheck ? 'text' : 'password'}
              name="passwordCheck"
              register={register}
              validationRules={{
                required: passwordCheckIsEmpty,
                validate: (value: string) =>
                  value === password || passwordIsNotMach,
              }}
              error={errors.passwordCheck?.message}
              toggleShowPassword={() => toggleShowPassword('passwordCheck')}
              showPasswordButton={true}
            />
          </div>
          <input type="submit" value="회원가입" />
        </form>
      </div>
    </main>
  )
}

export const getServerSideProps = withAuth(
  async (context, user) => {
    return { props: {} }
  },
  { reverseRedirect: true },
)

export default SignUp
