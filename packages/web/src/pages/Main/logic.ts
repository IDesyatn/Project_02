import { getElementById, getInputValue, setInnerText } from '../../ts/utils';

export function openAndClose(modalId) {
  const modalActive = document.getElementById(modalId);
  const closeModal = modalActive.querySelector('.modal__close');
  const modalArea = modalActive.querySelector('.modal__area');
  const btnCancel = modalActive.querySelector('.modal__close-btn');
  const btnSubmit = modalActive.querySelector('.modal__btn');

  modalActive.classList.add('active');

  document.body.classList.add('hidden');
  if (closeModal || btnSubmit) {
    closeModal.addEventListener('click', () => {
      modalActive.classList.remove('active');
      document.body.classList.remove('hidden');
    });
  }

  if (modalArea) {
    modalArea.addEventListener('click', () => {
      modalActive.classList.remove('active');
      document.body.classList.remove('hidden');
    });
  }

  if (btnCancel) {
    btnCancel.addEventListener('click', () => {
      modalActive.classList.remove('active');
      document.body.classList.remove('hidden');
    });
  }
}

export function showPass(inp, btt) {
  const input = <HTMLInputElement>document.getElementById(inp);
  const button = <HTMLInputElement>document.getElementById(btt);
  if (input.type === 'password') {
    input.type = 'text';
    button.src = 'https://img.icons8.com/material/24/ffffff/visible--v1.png';
  } else {
    input.type = 'password';
    button.src = 'https://img.icons8.com/material-rounded/24/ffffff/sleepy-eyes.png';
  }
}

export function validateStatusCheck(state): boolean {
  const button = <HTMLElement>getElementById('createModal__content_button-confirm modal__btn');
  if (state.validateStatus.includes(false)) {
    if (!button.hasAttribute('disabled')) {
      button.setAttribute('disabled', 'disabled');
    }
    return false;
  }
  button.removeAttribute('disabled');
  return true;
}

export function selectDB() {
  const selectedDB: any = document.getElementById('selectDB') as HTMLElement;

  selectedDB.value = localStorage.getItem('selectDB');

  selectedDB.addEventListener('change', (el) => {
    const { value } = el.target;
    localStorage.setItem('selectDB', value);
  });
}

export function putSettings(url, data) {
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response: Response) => {
      if (response.status === 200) {
        console.log(response);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateAccount() {
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const newPassword = (document.getElementById('newPassword') as HTMLInputElement).value;
  const login = (document.getElementById('login') as HTMLInputElement).value;
  const newLogin = (document.getElementById('newLogin') as HTMLInputElement).value;

  const data = {
    password,
    newPassword: newPassword === '' ? password : newPassword,
    login,
    newLogin: newLogin === '' ? login : newLogin,
  };

  putSettings('/main/settings', data);
}

export function userLogout() {
  fetch('/main/logout', {
    method: 'POST',
  }).then((res) => {
    window.location.href = res.url;
  });
}

export function changeNameModal(state) {
  const title = document.getElementById('changeName');
  const localStorageLanguage = localStorage.getItem('selected-language') || 'english';

  if (state.selectedModal === 'create') {
    title.textContent = 'Create'
    if (localStorageLanguage === 'russian') {
      title.textContent = 'Создать'
    }
  } else {
    title.textContent = 'Update'
    if (localStorageLanguage === 'russian') {
      title.textContent = 'Изменить'
    }
  }
}
