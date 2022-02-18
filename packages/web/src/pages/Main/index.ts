
import "./style.scss"
import { languageHandle } from '../../ts/localization'
import {themeHandler, openAndClose, selectedRow, selectDB, firstNameValidation, lastNameValidation, ageValidation , cityValidation, phoneValidation, emailValidation, companyValidation, settingsLoginValidation, settingsCurrentPassValidation, settingsRepeatPassValidation, showPass} from './logic'
import { addListener } from '../../ts/utils';
import { loginValidation, passwordValidation, validateStatusCheck } from '../Login/logic';
import { doc } from 'prettier';
import {clearAll} from './logicProcess/clearAll'


document.addEventListener('DOMContentLoaded', () => {
  languageHandle();
  themeHandler();
  selectedRow();
  init();
  selectDB();
});



const openModal = document.querySelectorAll('.modal__open');

openModal.forEach(function(button) {
  button.addEventListener('click', (event) => {

    // @ts-ignore
    const modalTarget = <HTMLButtonElement>event.target.dataset.modal;
    openAndClose(modalTarget);
  });

});


function init() {
  const state = {
    DB: '/mysql',
    Data: null,
    SortedData: null,
    SelectedNode: null,
    SelectedId: null,
    SelectedObj: null,
    validateStatus: [false, false],
  };

  addListener('saveClear', 'click', clearAll(state));


  addListener('login-input', 'input', () => {
    loginValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('password-input', 'input', () => {
    passwordValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('firstName', 'input', () => {
    firstNameValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('lastName', 'input', () => {
    lastNameValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('age', 'input', () => {
    ageValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('city', 'input', () => {
    cityValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('phone', 'input', () => {
    phoneValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('email', 'input', () => {
    emailValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('company', 'input', () => {
    companyValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('newLogin', 'input', () => {
    settingsLoginValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('newPassword', 'input', () => {
    settingsCurrentPassValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('repeatPassword', 'input', () => {
    settingsRepeatPassValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
}

const buttonEye = document.getElementById('img');
const buttonEye2 = document.getElementById('img2');

buttonEye.addEventListener('click', event => {
  showPass('newPassword', 'img');
});

buttonEye2.addEventListener('click', event => {
  showPass('repeatPassword', 'img2');
});

