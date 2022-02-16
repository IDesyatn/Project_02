import { getInputValue, getElementById, setInnerText } from "../../ts/utils"

export function showPass() {
            const input  = <HTMLInputElement>document.getElementById("password-input");
            const button  = <HTMLInputElement>document.getElementById("img");
            if (input.type === "password") {
                input.type = "text";
                button.src = "https://img.icons8.com/material/24/ffffff/visible--v1.png"

            } else {
                input.type = "password";
                button.src = "https://img.icons8.com/material-rounded/24/ffffff/sleepy-eyes.png"
            }
        }

export function mode() {
            const a = ((document.getElementById('select-mode'))as HTMLInputElement).value;
            const b = document.getElementById('box')
            const c = document.getElementById('container')

            if (a === "value2") {
                b.classList.add("ligth");
                c.classList.add("ligth-container");
            } else {
                b.classList.remove("ligth");
                c.classList.remove("ligth-container");
            }

}

export function loginValidation(state) {
  const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
  const value = <string>getInputValue('login-input');
  const loginId = 'login-message';

  if (value === '') {
    setInnerText(loginId, 'Field can`t be empty');
    state.validateStatus[0] = false;
    return false;
  }

  if (value.length < 6) {
    setInnerText(loginId, 'Login at least 6 characters');
    state.validateStatus[0] = false;
    return false;
  }

  if (value.length > 20) {
    setInnerText(loginId, 'Login can`t be longer than 20 characters');
    state.validateStatus[0] = false;
    return false;
  }

  if (!value.match(loginRegex)) {
    setInnerText(loginId, 'Login must contain only letters, numbers, and underscores');
    state.validateStatus[0] = false;
    return false;
  }

  setInnerText(loginId, '');
  state.validateStatus[0] = true;
  return true;
}

export function passwordValidation(state) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const value = <string>getInputValue('password-input');
  const passwordId = 'password-message';

  if (value === '') {
    setInnerText(passwordId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    return false;
  }

  if (value.length < 8) {
    setInnerText(passwordId, 'Password at least 8 characters');
    state.validateStatus[1] = false;
    return false;
  }

  if (!value.match(passwordRegex)) {
    setInnerText(passwordId, 'Password must contain letters, numbers, and special symbols');
    state.validateStatus[1] = false;
    return false;
  }

  setInnerText(passwordId, '');
  state.validateStatus[1] = true;
  return true;
}

export function validateStatusCheck(state): boolean {
  const button = <HTMLElement>getElementById('login-button');
  if (state.validateStatus.includes(false)) {
    if (!button.hasAttribute('disabled')) {
      button.setAttribute('disabled', 'disabled');
    }
    return false;
  }
  button.removeAttribute('disabled');
  return true;
}




