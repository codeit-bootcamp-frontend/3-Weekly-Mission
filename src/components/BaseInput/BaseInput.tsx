export default function BaseInput() {
  return (
    <div className={cn('input-container')}>
      <input
        type={type}
        name={type}
        className={isCheckError ? cn('input', 'error') : cn('input')}
        placeholder={placeholder}
        onChange={onChangeInput}
        onBlur={onBlurInput}
        onKeyDown={onKeydown}
      />
      {type === 'password' &&
        (isHide ? (
          <Image
            width={16}
            height={16}
            className={cn('password-icon')}
            src="/images/eye-on.svg"
            alt="눈모양 아이콘"
            onClick={onClickIcon}
          />
        ) : (
          <Image
            width={16}
            height={16}
            className={cn('password-icon')}
            src="/images/eye-off.svg"
            alt="눈에 빗금친 아이콘"
            onClick={onClickIcon}
          />
        ))}
      {isCheckError && (
        <span className={cn('error-message')}>{errorMessage}</span>
      )}
    </div>
  );
}
