import { Input } from "@/components/accountPage/Input";
import styles from "@/styles/accountPage.module.css";
import classNames from "classnames/bind";
import { postSignIn } from "@/api";
import { useForm } from "react-hook-form";
import { EMAIL_REG } from "./SignupForm";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const router = useRouter();
  
  if (localStorage.getItem("accessToken")) router.push("/folder");

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

  return (
    <form
      className={cx("email-passwd-wrapper")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cx("email-passwd")}>
        <label htmlFor="email-input">이메일</label>
        <Input
          id="email-input"
          type="email"
          placeholder="이메일을 입력해 주세요."
          register={register("email", {
            required: "이메일을 입력해 주세요.",
            pattern: {
              value: EMAIL_REG,
              message: "올바른 이메일 주소가 아닙니다.",
            },
          })}
          error={errors.email}
        />
      </div>
      <div className={cx("email-passwd")}>
        <label htmlFor="passwd-input">비밀번호</label>
        <Input
          id="passwd-input"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          register={register("password", {
            required: "비밀번호를 입력해 주세요.",
          })}
          error={errors.password}
        />
      </div>
      <button type="submit" className={cx("login")}>
        로그인
      </button>
    </form>
  );
}
