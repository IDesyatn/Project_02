import "./style.scss"


const chk = document.getElementById('change');

chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
});