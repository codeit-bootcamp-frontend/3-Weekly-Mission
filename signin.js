const TEST_EMAIL = "test@codeit.com";
const TEST_PWD = "codeit101";

const signinEmail = document.getElementById("signin-email");
const errEmail = document.getElementById("err-email");

function validateEmail(emailInput) {
  if (!emailInput.value) {
    // 빈칸일 때
    return validateInput(emailInput, errEmail, "이메일을 입력해주세요.");
  }
  if (!emailRegex.test(signinEmail.value)) {
    // 이메일 형식 오류일 때
    return validateInput(
      emailInput,
      errEmail,
      "올바른 이메일 주소가 아닙니다."
    );
  }

  return validateInput(emailInput, errEmail, "");
}
signinEmail.addEventListener("focusout", function () {
  validateEmail(this);
});

const signinPassword = document.getElementById("signin-password");
const errPassword = document.getElementById("err-password");

function validatePassword(passwordInput) {
  if (!passwordInput.value) {
    // 빈칸일 때
    return validateInput(
      passwordInput,
      errPassword,
      "비밀번호를 입력해주세요."
    );
  }

  return validateInput(passwordInput, errPassword, "");
}
signinPassword.addEventListener("focusout", function () {
  validatePassword(this);
});

function submit() {
  if (signinEmail.value === TEST_EMAIL && signinPassword.value === TEST_PWD) {
    alert("로그인 성공");
    const link = "folder.html";
    window.location.href = link;
  } else {
    if (signinEmail.value !== TEST_EMAIL) {
      validateInput(signinEmail, errEmail, "이메일을 확인해주세요.");
    }
    if (signinPassword.value !== TEST_PWD) {
      validateInput(signinPassword, errPassword, "비밀번호를 확인해주세요.");
    }
  }
}

const button = document.getElementById("signin-btn");
button.addEventListener("click", submit);

//키보드 엔터로 제출
document
  .getElementById("signin-form")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submit();
    }
  });
