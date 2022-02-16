import "./style.scss"
import {loginValidation,validateStatusCheck,passwordValidation, confirmPasswordValidation, showPass, mode} from "./logic"
import { languageHandle } from '../../ts/localization'
import {addListener} from '../../ts/utils'


document.addEventListener("DOMContentLoaded", () => {
  languageHandle();
  init();
});


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
}


const buttonEye = document.getElementById('img');
const buttonEye2 = document.getElementById('img2');
const dropdaunTheme = document.getElementById('select-mode');

buttonEye.addEventListener('click', event => {
    showPass('password-input', 'img');
});

buttonEye2.addEventListener('click', event => {
    showPass('password-input2', 'img2');
});

dropdaunTheme.addEventListener('change', event => {
    mode();
});



//const changeLange = document.getElementById('select-lang');
/*changeLange.onchange = function(){
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

}*/

