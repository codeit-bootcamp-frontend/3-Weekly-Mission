import classNames from "classnames/bind";
import styles from "./EmailInput.module.scss";

const cx = classNames.bind(styles);

export default function EmailInput({
  email,
  handleEmailBlur,
  setEmail,
  emailError,
}) {
  return (
    <div>
      <label className={cx("label")} htmlFor="email">
        이메일
      </label>
      <input
        className={cx("input", { "input-error": emailError })}
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleEmailBlur}
        placeholder="이메일을 입력해주세요"
      />
      {emailError && <div className={cx("error-message")}>{emailError}</div>}
    </div>
  );
}
