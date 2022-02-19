import { getElementById, getInputValue, setInnerText } from '../../ts/utils';

export function loginValidation(state) {
  const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
  const value = <string>getInputValue('login-input');
  const loginInput = document.getElementById('login-input');
  const loginId = 'login-message';

  if (value === '') {
    setInnerText(loginId, 'Field can`t be empty');
    state.validateStatus[0] = false;
    loginInput.classList.add('invalid')
    return false;
  }

  if (value.length < 6) {
    setInnerText(loginId, 'Login at least 6 characters');
    state.validateStatus[0] = false;
    loginInput.classList.add('invalid')
    return false;
  }

  if (value.length > 20) {
    setInnerText(loginId, 'Login can`t be longer than 20 characters');
    state.validateStatus[0] = false;
    loginInput.classList.add('invalid')
    return false;
  }

  if (!value.match(loginRegex)) {
    setInnerText(loginId, 'Login must contain only letters, numbers, and underscores');
    state.validateStatus[0] = false;
    loginInput.classList.add('invalid')
    return false;
  }

  setInnerText(loginId, '');
  state.validateStatus[0] = true;
  loginInput.classList.remove('invalid')
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
    passwordInput.classList.add('invalid')
    return false;
  }

  if (value.length < 8) {
    setInnerText(passwordId, 'Password at least 8 characters');
    state.validateStatus[1] = false;
    passwordInput.classList.add('invalid')
    return false;
  }

  if (!value.match(passwordRegex)) {
    setInnerText(passwordId, 'Password must contain letters, numbers, and special symbols');
    state.validateStatus[1] = false;
    passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(passwordId, '');
  state.validateStatus[1] = true;
  passwordInput.classList.remove('invalid')
  return true;
}

export function confirmPasswordValidation(state) {

  const pass = <string>getInputValue('password-input');
  const pass2 = <string>getInputValue('password-input2');
  const passwordInput = document.getElementById('password-input2');
  const passwordId = 'password-message2';

  if (pass !== pass2) {
    setInnerText(passwordId, 'Passwords don`t match');
    state.validateStatus[1] = false;
    passwordInput.classList.add('invalid')
    return false;
  }

  if (pass === '') {
    setInnerText(passwordId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(passwordId, '');
  state.validateStatus[1] = true;
  passwordInput.classList.remove('invalid')
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

export function showPass(inp, btt) {
            const input  = <HTMLInputElement>document.getElementById(inp);
            const button  = <HTMLInputElement>document.getElementById(btt);
            if (input.type === "password") {
                input.type = "text";
                button.src = "https://img.icons8.com/material/24/ffffff/visible--v1.png"

            } else {
                input.type = "password";
                button.src = "https://img.icons8.com/material-rounded/24/ffffff/sleepy-eyes.png"
            }
        }

// export function mode() {
//             const a = ((document.getElementById('select-mode'))as HTMLInputElement).value;
//             const b = document.getElementById('box')
//             const c = document.getElementById('container')
//
//             if (a === "value2") {
//                 b.classList.add("ligth");
//                 c.classList.add("ligth-container");
//             } else {
//                 b.classList.remove("ligth");
//                 c.classList.remove("ligth-container");
//             }
//
// }
//

/*export function registerData(state) {
  if (loginValidation(state) === false || passwordValidation(state) === false || confirmPasswordValidation(state) === false) {
    return false;
  }

  const user = ((document.getElementById('login-input')) as HTMLInputElement).value;
  const password = ((document.getElementById('password-input')) as HTMLInputElement).value;
  const formData = { 'username': user, 'password': password };

  postRegister(state.url, formData);
}

export function postRegister(url, data) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response: Response) => {
      if (response.status === 200) {
        window.location.href = response.url;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}*/

