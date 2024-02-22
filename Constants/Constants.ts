export const DEFALUT_MODAL_VALUE = {
    type: "",
    folderName: "",
    sharingUrl: "",
    url: "",
};

export const URL_DOMAIN = "bootcamp-api.codeit.kr";

export enum SignInputErrorMessages {
    PleaseEnterEmail = "이메일을 입력해주세요.",
    NotValidEmail = "올바른 이메일 주소가 아닙니다.",
    PleaseEnterPassword = "비밀번호를 입력해주세요.",
    PleaseConfirmEmail = "이메일을 확인해주세요.",
    PleaseConfirmPassword = "비밀번호를 확인해주세요.",
    CheckPasswordFormat = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    NotMatchedPassword = "비밀번호가 일치하지 않아요.",
    NoError = "",
}

export const CONFIRM_EMAIL =
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])";

export const CONFIRM_PASSWORD_ALPHABET = "[A-Za-z]";
export const CONFIRM_PASSWORD_NUMBER = "[0-9]";
