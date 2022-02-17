import { getElementById, getInputValue, setInnerText } from '../../ts/utils';

export function openAndClose(modalId) {
    const modalActive = document.getElementById(modalId);
    const closeModal = modalActive.querySelector('.modal__close');
    const modalArea = modalActive.querySelector('.modal__area');
    const btnCancel = modalActive.querySelector('.modal__close-btn');

    modalActive.classList.add('active');
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        modalActive.classList.remove('active');
      });
    }

    if (modalArea) {
      modalArea.addEventListener('click', () => {
        modalActive.classList.remove('active');
      });
    }

    if (btnCancel) {
      btnCancel.addEventListener('click', () => {
        modalActive.classList.remove('active');
      });
    }
}

export function themeHandler() {
    const body = <HTMLElement>document.getElementById('body');
    const selectedTheme = <HTMLInputElement>document.getElementById('select-theme');
    const localStorageTheme = localStorage.getItem('selected-theme') || 'light';

    selectedTheme.value = localStorageTheme;
    setTheme(body, localStorageTheme);

    selectedTheme.addEventListener('change', () => {
      setTheme(body, selectedTheme.value);
    });
  }

 export function setTheme(rootElement, theme) {
    const darkThemeClass = 'theme-dark';
    const lightThemeClass = 'theme-light';
    localStorage.setItem('selected-theme', theme);
    switch (theme) {
      case 'dark':
        rootElement.className = `${darkThemeClass}`;
        break;

      case 'light':
        rootElement.className = `${lightThemeClass}`;
        break;
    }
  }

export function selectedRow() {
  const table: any = document.getElementById("table");
  let index;

  for (let i = 1; i < table.rows.length; i++) {

    table.rows[i].onclick = function() {

      if (typeof index !== "undefined") {
        table.rows[index].classList.toggle("selectedRow");
      }

      index = this.rowIndex;
      this.classList.toggle("selectedRow");
    };
  }
}


export function firstNameValidation(state) {
  //const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  //const passwordInput = document.getElementById('password-input');
  const validationRegex = /^[A-Za-z]+$/;
  const value = <string>getInputValue('firstName');
  const messageId = 'firstName-message';

  if (value === '') {
    setInnerText(messageId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (value.length > 50) {
    setInnerText(messageId, 'First name no more than 50 characters');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (!value.match(validationRegex)) {
    setInnerText(messageId, 'First name must contain only letters');
    state.validateStatus[1] = false;
   // passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(messageId, '');
  state.validateStatus[1] = true;
 // passwordInput.classList.remove('invalid')
  return true;
}

export function lastNameValidation(state) {
  //const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  //const passwordInput = document.getElementById('password-input');
  const validationRegex = /^[A-Za-z]+$/;
  const value = <string>getInputValue('lastName');
  const messageId = 'lastName-message';

  if (value === '') {
    setInnerText(messageId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (value.length > 50) {
    setInnerText(messageId, 'Last name no more than 50 characters');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (!value.match(validationRegex)) {
    setInnerText(messageId, 'Last name must contain only letters');
    state.validateStatus[1] = false;
    // passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(messageId, '');
  state.validateStatus[1] = true;
  // passwordInput.classList.remove('invalid')
  return true;
}

export function ageValidation(state) {
  //const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  //const passwordInput = document.getElementById('password-input');
  const validationRegex = /^[0-9]+$/
  const value = <string>getInputValue('age');
  const messageId = 'age-message';

  if (value === '') {
    setInnerText(messageId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (!value.match(validationRegex)) {
    setInnerText(messageId, 'Age must contain only numbers');
    state.validateStatus[1] = false;
    // passwordInput.classList.add('invalid')
    return false;
  }

  if (value.length > 3 ) {
    setInnerText(messageId, 'Age no more than 3 characters');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (value.length < 2 ) {
    setInnerText(messageId, 'Age no less than 2 characters');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(messageId, '');
  state.validateStatus[1] = true;
  // passwordInput.classList.remove('invalid')
  return true;
}

export function cityValidation(state) {
  //const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  //const passwordInput = document.getElementById('password-input');
  const validationRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
  const value = <string>getInputValue('city');
  const messageId = 'city-message';

  if (value === '') {
    setInnerText(messageId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (!value.match(validationRegex)) {
    setInnerText(messageId, 'Invalid input format');
    state.validateStatus[1] = false;
    // passwordInput.classList.add('invalid')
    return false;
  }

  if (value.length > 50 ) {
    setInnerText(messageId, 'City no more than 50 characters');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(messageId, '');
  state.validateStatus[1] = true;
  // passwordInput.classList.remove('invalid')
  return true;
}

export function phoneValidation(state) {
  //const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  //const passwordInput = document.getElementById('password-input');
  const validationRegex = /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/
  const value = <string>getInputValue('phone');
  const messageId = 'phone-message';

  if (value === '') {
    setInnerText(messageId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (!value.match(validationRegex)) {
    setInnerText(messageId, 'Invalid input format');
    state.validateStatus[1] = false;
    // passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(messageId, '');
  state.validateStatus[1] = true;
  // passwordInput.classList.remove('invalid')
  return true;
}

export function emailValidation(state) {
  //const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  //const passwordInput = document.getElementById('password-input');
  const validationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const value = <string>getInputValue('email');
  const messageId = 'email-message';

  if (value === '') {
    setInnerText(messageId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (!value.match(validationRegex)) {
    setInnerText(messageId, 'Invalid input format');
    state.validateStatus[1] = false;
    // passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(messageId, '');
  state.validateStatus[1] = true;
  // passwordInput.classList.remove('invalid')
  return true;
}

export function companyValidation(state) {
  //const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
  //const passwordInput = document.getElementById('password-input');

  const value = <string>getInputValue('company');
  const messageId = 'company-message';

  if (value === '') {
    setInnerText(messageId, 'Field can`t be empty');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (value.length > 50) {
    setInnerText(messageId, 'Company name no more than 50 characters');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  if (value.length < 3 ) {
    setInnerText(messageId, 'Company name no less than 3 characters');
    state.validateStatus[1] = false;
    //passwordInput.classList.add('invalid')
    return false;
  }

  setInnerText(messageId, '');
  state.validateStatus[1] = true;
  // passwordInput.classList.remove('invalid')
  return true;
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
