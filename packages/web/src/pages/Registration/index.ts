import "./style.scss"

const buttonEye = document.getElementById('img');
const buttonEye2 = document.getElementById('img2');
const dropdaunTheme = document.getElementById('select-mode');
const changeLange = document.getElementById('select-lang');

buttonEye.addEventListener('click', event => {
    showPass('password-input', 'img');
});

buttonEye2.addEventListener('click', event => {
    showPass('password-input2', 'img2');
});

dropdaunTheme.addEventListener('change', event => {
    mode();
});

 function showPass(inp, btt) {
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


changeLange.onchange = function(){
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

}
