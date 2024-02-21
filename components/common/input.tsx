import { ComponentPropsWithRef, useState, FocusEvent } from "react";
import * as S from "./InputStyle";
import EyeIcon from "./EyeIcon";

interface Props
  extends Omit<ComponentPropsWithRef<"input">, "type" | "className"> {
  type?: "text" | "password";
  error?: string | boolean;
  placeholder: string;
}

export default function Input({
  type = "text",
  error,
  onBlur = () => {},
  placeholder = "",
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setShowPassword((visible) => !visible);
  };
  let inputType = "text";

  if (type === "password") {
    inputType = showPassword ? "text" : "password";
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur(e);
  };

  return (
    <S.Container>
      <S.InputWrapper data-isError={error === "" || !!error}>
        <S.Input
          type={inputType}
          onBlur={handleBlur}
          placeholder={placeholder}
          {...props}
        />
        {type === "password" ? (
          <S.Button onClick={handleToggle}>
            <EyeIcon showPassword={showPassword} />
          </S.Button>
        ) : null}
      </S.InputWrapper>
      {error && typeof error === "string" ? <S.Span>{error}</S.Span> : null}
    </S.Container>
  );
}
