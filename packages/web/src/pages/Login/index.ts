import "./style.scss"

import { languageHandle }  from '../../ts/localization'
import { showPass, mode, loginValidation, validateStatusCheck, passwordValidation } from "./logic"

document.addEventListener("DOMContentLoaded", () => {
languageHandle ();
});




const buttonEye = document.getElementById('img');
const dropdaunTheme = document.getElementById('select-mode');
// const changeLange = document.getElementById('select-lang');

buttonEye.addEventListener('click', event => {
    showPass()
});

dropdaunTheme.addEventListener('change', event => {
    mode();
});


function showPass() {
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

function mode() {
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




/*changeLange.onchange = function(){
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

}*/

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


