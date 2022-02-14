import "./style.scss"

const buttonEye = document.getElementById('img');
const dropdaunTheme = document.getElementById('select-mode');

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