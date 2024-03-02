import { Input } from "@/components/account/Input";
import styles from "@/styles/accountPage.module.css";
import classNames from "classnames/bind";
import { postSignIn } from "@/api";
import { Controller, useForm } from "react-hook-form";
import { EMAIL_REG } from "./SignupForm";
import { useRouter } from "next/router";
import { useEffect } from "react";

const cx = classNames.bind(styles);

export interface FormData {
  email: string;
  password: string;
};

export default function SigninForm() {
  const { handleSubmit, watch, setError, control } = useForm<FormData>({
    mode: "onBlur",
  });

  const router = useRouter();

  const inputValue = watch();

  const onSubmit = async () => {
    const result = await postSignIn({
      email: inputValue.email,
      password: inputValue.password,
      setError,
    });
    if (result) {
      localStorage.setItem("accessToken", result.accessToken);
      router.push("/folder");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) router.push("/folder");
  }, [router]);
  return (
    <form
      className={cx("email-passwd-wrapper")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cx("email-passwd")}>
        <label htmlFor="email-input">이메일</label>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: EMAIL_REG,
              message: "올바른 이메일 주소가 아닙니다.",
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              id="email-input"
              type="email"
              placeholder="이메일을 입력해 주세요."
              {...field} // field 객체에서 제공하는 onChange, onBlur, value를 Input에 전달
              error={fieldState.error} // fieldState에서 error 상태를 가져와서 Input에 전달
            />
          )}
        />
      </div>
      <div className={cx("email-passwd")}>
        <label htmlFor="passwd-input">비밀번호</label>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "비밀번호를 입력해 주세요.",
          }}
          render={({ field, fieldState }) => (
            <Input
              id="password-input"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              {...field}
              error={fieldState.error}
            />
          )}
        />
      </div>
      <button type="submit" className={cx("login")}>
        로그인
      </button>
    </form>
  );
}
