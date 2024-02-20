import classNames from "classnames/bind";
import styles from "./ConfirmPasswordInput.module.scss";

const cx = classNames.bind(styles);

export default function ConfirmPasswordInput({
  confirmPassword,
  setConfirmPassword,
  handleConfirmPasswordBlur,
  confirmPasswordError,
  isVisiblePassword,
  handleTogglePassword,
}) {
  return (
    <div className={cx("confirmPassword-container")}>
      <label className={cx("label")} htmlFor="confirmPassword">
        비밀번호 확인
      </label>
      <input
        className={cx("input", { "input-error": confirmPasswordError })}
        type={isVisiblePassword ? "text" : "password"}
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={handleConfirmPasswordBlur}
        placeholder="비밀번호와 일치하는 값을 입력해 주세요"
      />
      <img
        className={cx("passwordEye")}
        src={isVisiblePassword ? "/images/eye-on.png" : "/images/eye-off.png"}
        alt="비밀번호 보이게 설정하기"
        data-img="passwordEye"
        onClick={handleTogglePassword}
      />
      {confirmPasswordError && (
        <div className={cx("error-message")}>{confirmPasswordError}</div>
      )}
    </div>
  );
}
