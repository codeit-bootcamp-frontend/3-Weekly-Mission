import { emailChecker, passwordChecker } from "@/utils/regCheck";
import { ChangeEvent, useState } from "react";

const STATE = { existError: false, errorMessage: "" };
const INPUT = {
  email: "",
  password: "",
  passwordAgain: "",
};
const ERROR = {
  email: STATE,
  password: STATE,
  passwordAgain: STATE,
};

export default function useSignValid(inputs = "signin") {
  const [inputValue, setInputValue] = useState(INPUT);
  const [existError, SetExistError] = useState(ERROR);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputValue((prev) => {
      return { ...prev, [id]: value };
    });

    if (id === "email") {
      if (!value) {
        SetExistError((prev) => {
          return {
            ...prev,
            [id]: { existError: true, errorMessage: "이메일을 입력해주세요!" },
          };
        });
      } else if (!emailChecker(value)) {
        SetExistError((prev) => {
          return {
            ...prev,
            [id]: {
              existError: true,
              errorMessage: "올바른 이메일이 아닙니다!",
            },
          };
        });
      } else {
        SetExistError(() => {
          return { ...ERROR };
        });
      }
    } else if (id === "password" && inputs === "signup") {
      if (!value) {
        SetExistError((prev) => {
          return {
            ...prev,
            [id]: {
              existError: true,
              errorMessage: "비밀번호를 입력해주세요!",
            },
          };
        });
      } else if (!passwordChecker(value)) {
        SetExistError((prev) => {
          return {
            ...prev,
            [id]: {
              existError: true,
              errorMessage:
                "비밀번호는 8자 이상, 숫자와 영어가 포함되게 해주세요!",
            },
          };
        });
      } else {
        SetExistError(() => {
          return { ...ERROR };
        });
      }
    } else if (id === "password" && inputs === "signin") {
      if (!value) {
        SetExistError((prev) => {
          return {
            ...prev,
            [id]: {
              existError: true,
              errorMessage: "비밀번호를 입력해주세요!",
            },
          };
        });
      } else {
        SetExistError(() => {
          return { ...ERROR };
        });
      }
    } else if (id === "passwordAgain") {
      if (!value) {
        SetExistError((prev) => {
          return {
            ...prev,
            [id]: {
              existError: true,
              errorMessage: "비밀번호를 확인해주세요!",
            },
          };
        });
      } else if (inputValue?.password !== inputValue?.passwordAgain) {
        SetExistError((prev) => {
          return {
            ...prev,
            [id]: { existError: true, errorMessage: "비밀번호가 틀립니다!!" },
          };
        });
      } else {
        SetExistError(() => {
          return { ...ERROR };
        });
      }
    }
  };

  return { inputValue, onChange, existError };
}
