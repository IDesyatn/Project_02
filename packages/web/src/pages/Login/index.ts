import "./style.scss"
import {showPass, mode, loginValidation,validateStatusCheck,passwordValidation} from "./logic" 

const buttonEye = document.getElementById('img');
const dropdaunTheme = document.getElementById('select-mode');

buttonEye.addEventListener('click', event => {
    showPass()
});

dropdaunTheme.addEventListener('change', event => {
    mode();
});

function addListener(id, eventType, callback) {
  const node = document.getElementById(id);
  if (node) {
    node.addEventListener(eventType, callback);
    return true;
  }
  return false;
}

function init() {
    const state = {
        url: '/login',
        validateStatus: [false, false],
    };

    addListener('login-input', 'input', () => {
        loginValidation.call(null, state);
        validateStatusCheck.call(null, state);
    });
    addListener('password-input', 'input', () => {
        passwordValidation.call(null, state);
        validateStatusCheck.call(null, state);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});

