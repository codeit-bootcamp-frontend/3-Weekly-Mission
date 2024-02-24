import { Input } from "@/components/accountPage/Input";
import styles from "@/styles/accountPage.module.css";
import classNames from "classnames/bind";
import { checkEmail, postSignUp } from "@/api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export const EMAIL_REG = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const PASSWD_REG = /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/;

const cx = classNames.bind(styles);
export default function SignUpForm() {
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
    const emailCheck = await checkEmail({ email: inputValue.email, setError });

    if (emailCheck) {
      postSignUp({
        email: inputValue.email,
        password: inputValue.password,
      }).then((result) => {
        localStorage.setItem("accessToken", result.accessToken);
        router.push("/folder");
      });
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
          type="text"
          placeholder="이메일을 입력해주세요."
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
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          register={register("password", {
            required: "비밀번호를 입력해 주세요.",
            pattern: {
              value: PASSWD_REG,
              message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
            },
          })}
          error={errors.password}
        />
      </div>
      <div className={cx("email-passwd")}>
        <label htmlFor="passwd-check">비밀번호 확인</label>
        <Input
          id="passwd-check"
          type="password"
          placeholder="비밀번호와 일치하는 값을 입력해 주세요"
          register={register("passwordCheck", {
            validate: (value) => {
              if (value !== inputValue.password)
                return "비밀번호가 일치하지 않아요";
            },
          })}
          error={errors.passwordCheck}
        />
      </div>

      <button type="submit" className={cx("login", "long")}>
        회원가입
      </button>
    </form>
  );
}
