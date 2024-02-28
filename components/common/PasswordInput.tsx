import classNames from "classnames/bind";
import styles from "./PasswordInput.module.scss";

const cx = classNames.bind(styles);

const PasswordInput = ({
  isVisiblePassword,
  password,
  handlePasswordBlur,
  setPassword,
  handleTogglePassword,
  passwordError,
  placeholder,
}) => {
  return (
    <div className={cx("password-container")}>
      <label className={cx("label")} htmlFor="password">
        비밀번호
      </label>
      <input
        className={cx("input", { "input-error": passwordError })}
        id="password"
        type={isVisiblePassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handlePasswordBlur}
        placeholder={placeholder}
      />
      <img
        className={cx("passwordEye")}
        src={isVisiblePassword ? "/images/eye-on.png" : "/images/eye-off.png"}
        alt="비밀번호 보이게 설정하기"
        data-img="passwordEye"
        onClick={handleTogglePassword}
      />
      {passwordError && (
        <div className={cx("error-message")}>{passwordError}</div>
      )}
    </div>
  );
};

export default PasswordInput;
