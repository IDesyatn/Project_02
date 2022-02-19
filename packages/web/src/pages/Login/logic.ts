import { getInputValue, getElementById, setInnerText } from '../../ts/utils';

export function showPass() {

            const input  = <HTMLInputElement>document.getElementById("password-input");
            const button  = <HTMLInputElement>document.getElementById("img");
            if (input.type === "password") {
                input.type = "text";
                button.src = "https://img.icons8.com/material/24/ffffff/visible--v1.png"
                return true;
            } else {
                input.type = "password";
                button.src = "https://img.icons8.com/material-rounded/24/ffffff/sleepy-eyes.png"
                return false;
            }
        }
        

export function loginValidation(state) {
  const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
  const value = <string>getInputValue('login-input');
  const loginInput = document.getElementById('login-input');
  const loginId = 'login-message';

  if (value === '') {
    setInnerText(loginId, 'Field can`t be empty');
    state.validateStatus[0] = false;
    loginInput.classList.add('invalid');
    return false;
  }

  if (value.length < 6) {
    setInnerText(loginId, 'Login at least 6 characters');
    state.validateStatus[0] = false;
    loginInput.classList.add('invalid');
    return false;
  }

  if (value.length > 20) {
    setInnerText(loginId, 'Login can`t be longer than 20 characters');
    state.validateStatus[0] = false;
    loginInput.classList.add('invalid');
    return false;
  }

  if (!value.match(loginRegex)) {
    setInnerText(loginId, 'Login must contain only letters, numbers, and underscores');
    state.validateStatus[0] = false;
    loginInput.classList.add('invalid');
    return false;
  }

  setInnerText(loginId, '');
  state.validateStatus[0] = true;
  loginInput.classList.remove('invalid');
  return true;
}

export function passwordValidation(state) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const value = <string>getInputValue('password-input');
  const passwordInput = document.getElementById('password-input');
  const passwordId = 'password-message';

  if (value === '') {
    setInnerText(passwordId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    passwordInput.classList.add('invalid');
    return false;
  }

  if (value.length < 8) {
    setInnerText(passwordId, 'Password at least 8 characters');
    state.validateStatus[1] = false;
    passwordInput.classList.add('invalid');
    return false;
  }

  if (!value.match(passwordRegex)) {
    setInnerText(passwordId, 'Password must contain letters, numbers, and special symbols');
    state.validateStatus[1] = false;
    passwordInput.classList.add('invalid');
    return false;
  }

  setInnerText(passwordId, '');
  state.validateStatus[1] = true;
  passwordInput.classList.remove('invalid');
  return true;
}

export function validateStatusCheck(state): boolean {
  const button = <HTMLElement>getElementById('submit');
  if (state.validateStatus.includes(false)) {
    if (!button.hasAttribute('disabled')) {
      button.setAttribute('disabled', 'disabled');
    }
    return false;
  }
  button.removeAttribute('disabled');
  return true;
}

export function postLogin(url, data) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response: Response) => {
      if (response.status === 200) {
        console.log(response);
        window.location.href = response.url;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function loginData(state) {
  if (loginValidation(state) === false || passwordValidation(state) === false) {
    return false;
  }

  const user = (document.getElementById('login-input') as HTMLInputElement).value;
  const password = (document.getElementById('password-input') as HTMLInputElement).value;
  const formData = { login: user, password };

  postLogin(state.url, formData);
}
