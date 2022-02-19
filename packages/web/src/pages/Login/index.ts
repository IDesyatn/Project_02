import './style.scss';

import { languageHandle } from '../../ts/localization';
import {
  showPass,
  loginValidation,
  validateStatusCheck,
  passwordValidation,
  loginData,
} from './logic';
import { addListener } from '../../ts/utils';
import { themeHandler } from '../../ts/themeHandler';

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

  addListener('submit', 'click', loginData.bind(null, state));
}

const buttonEye = document.getElementById('img');

buttonEye.addEventListener('click', (event) => {
  showPass();
});

document.addEventListener('DOMContentLoaded', () => {
  languageHandle();
  themeHandler();
  init();
});

// const changeLange = document.getElementById('select-lang');

/* changeLange.onchange = function(){
  if (changeLange[1].selected === true){
    document.getElementById('box__title').innerText = 'Вход';
    document.getElementById('them-1').innerText = 'Темная';
    document.getElementById('them-2').innerText = 'Светлая';
    document.getElementById('submit').value = 'Вход';
    document.getElementById('warning').innerText = 'Нужен аккаунт?';
    document.getElementById('warning-link').innerText = 'Регистрация';

    document.getElementById('box__title-1').innerText = 'Логин';
    document.getElementById('box__pass-title-1').innerText = 'Пароль';
    document.getElementById('box__pass-title-2').innerText = 'Подтверждение пароля';
  }else {
    document.getElementById('box__title').innerText = 'Login';
    document.getElementById('them-1').innerText = 'Dark';
    document.getElementById('them-2').innerText = 'Light';
    document.getElementById('submit').value = 'Log in';
    document.getElementById('warning').innerText = 'Need an account?';
    document.getElementById('warning-link').innerText = 'Sign in.';

    document.getElementById('box__title-1').innerText = 'Login';
    document.getElementById('box__pass-title-1').innerText = 'PASSWORD';
    document.getElementById('box__pass-title-2').innerText = 'CONFIRM PASSWORD';
  }

} */
