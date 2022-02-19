import './style.scss';
import {
  loginValidation,
  validateStatusCheck,
  passwordValidation,
  confirmPasswordValidation,
  showPass,
  mode,
  registerData,
} from './logic';
import { languageHandle } from '../../ts/localization';
import { addListener } from '../../ts/utils';
import { themeHandler } from '../../ts/themeHandler';

function init() {
  const state = {
    url: '/registration',
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
  addListener('password-input2', 'input', () => {
    confirmPasswordValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('submit', 'click', () => {
    registerData(state);
  });
  addListener('img', 'click', () => {
    showPass('password-input', 'img');
  });
  addListener('img2', 'click', () => {
    showPass('password-input2', 'img2');
  });
  addListener('select-mode', 'click', () => {
    mode();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  languageHandle();
  themeHandler();
  init();
});

// const changeLange = document.getElementById('select-lang');
/* changeLange.onchange = function(){
  if (changeLange[1].selected === true){
    document.getElementById('box__title').innerText = 'Регистрация';
    document.getElementById('them-1').innerText = 'Темная';
    document.getElementById('them-2').innerText = 'Светлая';
    document.getElementById('submit').value = 'Регистрация';
    document.getElementById('warning').innerText = 'У вас уже есть аккаунт?';
    document.getElementById('warning-link').innerText = 'Вход';

    document.getElementById('box__title-1').innerText = 'Логин';
    document.getElementById('box__pass-title-1').innerText = 'Пароль';
    document.getElementById('box__pass-title-2').innerText = 'Подтверждение пароля';
  }else {
    document.getElementById('box__title').innerText = 'Registration';
    document.getElementById('them-1').innerText = 'Dark';
    document.getElementById('them-2').innerText = 'Light';
    document.getElementById('submit').value = 'Register';
    document.getElementById('warning').innerText = 'Need an account?';
    document.getElementById('warning-link').innerText = 'Sign up.';

    document.getElementById('box__title-1').innerText = 'Login';
    document.getElementById('box__pass-title-1').innerText = 'PASSWORD';
    document.getElementById('box__pass-title-2').innerText = 'CONFIRM PASSWORD';
  }

} */
