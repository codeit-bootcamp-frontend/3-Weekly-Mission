const testEmail = "test@codeit.com";
const testPassword = "codeit101";

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

function emailErrorMessage() {
  const inputValue = emailInput.value;
  if (inputValue === '') {
    showEmailError('이메일을 입력해주세요.');
  } else if (inputValue === testEmail) {
    showEmailError('이미 사용 중인 이메일입니다.');
  } else if (!isValidEmail(inputValue)) {
    showEmailError('올바른 이메일 주소가 아닙니다.');
  } else {
    hideError();
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showEmailError(message) {
  emailError.textContent = message;
  emailError.classList.add('show-error', 'error-message');
  emailInput.classList.add('error');
}

function hideError() {
  emailError.textContent = '';
  emailError.classList.remove('show-error', 'error-message');
  emailInput.classList.remove('error');
}

emailInput.addEventListener('focusout', emailErrorMessage);

/*비밀번호 오류*/

const pwInput = document.querySelector('#password');
const pw2Input = document.querySelector('#password2');
const pwError = document.querySelector('#pw-error');
const pw2Error = document.querySelector('#pw2-error')

function pwErrorMessage() {
  const inputValue = pwInput.value;
  const targetValue = pw2Input.value;

  hideError();

  if (inputValue === '') {
    showPasswordError('비밀번호를 입력해주세요.');
  } else if (!isValidPw(inputValue)) {
    showPasswordError('비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.');
  } else if (inputValue !== targetValue) {
    showNotMatchError('비밀번호가 일치하지 않아요.');
  }
}

function isValidPw(password) {
  return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
}

function showPasswordError(message) {
  pwError.textContent = message;
  pwError.classList.add('show-error', 'error-message');
  pwInput.classList.add('error');
}

function showNotMatchError(message) {
  pw2Error.textContent = message;
  pw2Error.classList.add('show-error', 'error-message');
  pw2Input.classList.add('error');
}

function hideError() {
  pwError.textContent = '';
  pwError.classList.remove('show-error');
  pwInput.classList.remove('error');

  pw2Error.textContent = '';
  pw2Error.classList.remove('show-error');
  pw2Input.classList.remove('error');
}

pwInput.addEventListener('focusout', pwErrorMessage);
pw2Input.addEventListener('focusout', pwErrorMessage);