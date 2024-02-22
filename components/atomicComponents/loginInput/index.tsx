// import styles from "./loginInput.module.css";
// import { InputProps } from "@/types/Types";
// import React from "react";

// const LoginInput = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ label, id, error, ...props }: InputProps, ref) => {
//     return (
//       <>
//         <label htmlFor={id}>{label}</label>
//         <input id={id} ref={ref} {...props} />
//         {error && <div className="error">{error.message}</div>}
//       </>
//     );
//   }
// );

// export default LoginInput;

import styles from "./loginInput.module.css";
import {LoginInputProps} from "@/types/Types";
import { useId } from "react";

const LoginInput = ({ label, placeholder, inputType, onChange }: LoginInputProps) => {
  const id = useId();
  return (
    <div className={styles.login_input_from} >
      <label className={styles.login_input_label} htmlFor={id} >{label}</label>
      <input
        className={styles.login_input}
        id={id}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default LoginInput;


